const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const urls = [
    { category: 'Steel Fire Door', url: 'https://www.galaxyfiredoors.com/steel-fire-door/' },
    { category: 'General Metal Doors', url: 'https://www.galaxyfiredoors.com/general-metal-doors/' },
    { category: 'Acoustic Metal Doors', url: 'https://www.galaxyfiredoors.com/acoustic-metal-doors-with-powder-coating-finish/' },
    { category: 'Electrical Shaft Doors', url: 'https://www.galaxyfiredoors.com/electrical-shaft-doors-with-powder-coating-finish/' },
    { category: 'Full Glazed GI Steel Fire Doors', url: 'https://www.galaxyfiredoors.com/full-glazed-gi-steel-fire-door-with-powder-coating-finish/' },
    { category: 'Clean Room Doors', url: 'https://www.galaxyfiredoors.com/clean-room-doors-with-powder-coating-finish/' }
];

async function scrapeProduct(item) {
    console.log(`Scraping: ${item.url}...`);
    try {
        const { data } = await axios.get(item.url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        const $ = cheerio.load(data);
        
        const title = $('h1.elementor-heading-title').first().text().trim() || item.category;
        
        // Extract descriptions - look for common elementor text editor areas
        let description = '';
        $('div.elementor-text-editor').each((i, el) => {
            const text = $(el).text().trim();
            if (text.length > 50) { // filter out small snippets
                description += text + '\n\n';
            }
        });

        // Extract images
        const images = [];
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && (src.includes('content') || src.includes('upload')) && !src.includes('logo')) {
                const fullSrc = src.startsWith('http') ? src : 'https://www.galaxyfiredoors.com' + src;
                if (!images.includes(fullSrc)) {
                    images.push(fullSrc);
                }
            }
        });

        // Extract specs if in a list or table
        const specs = [];
        $('ul li').each((i, el) => {
            const text = $(el).text().trim();
            if (text.includes(':') || text.length > 20) {
                specs.push(text);
            }
        });

        return {
            category: item.category,
            url: item.url,
            title,
            description: description.trim(),
            images: images.slice(0, 10), // Limit to top 10 images
            specifications: specs.slice(0, 15) // Limit specs
        };
    } catch (error) {
        console.error(`Error scraping ${item.url}: ${error.message}`);
        return null;
    }
}

async function main() {
    const products = [];
    for (const item of urls) {
        const product = await scrapeProduct(item);
        if (product) {
            products.push(product);
        }
    }

    const outputPath = path.join(__dirname, 'products.json');
    fs.writeFileSync(outputPath, JSON.stringify(products, null, 2));
    console.log(`Successfully scraped ${products.length} products to ${outputPath}`);
}

main();
