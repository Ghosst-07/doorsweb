const axios = require('axios');
const cheerio = require('cheerio');

async function getImages(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const images = [];
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && (src.includes('content') || src.includes('upload'))) {
                images.push(src.startsWith('http') ? src : 'https://www.galaxyfiredoors.com' + src);
            }
        });
        return images;
    } catch (error) {
        return [];
    }
}

const urls = [
    'https://www.galaxyfiredoors.com/steel-fire-door/',
    'https://www.galaxyfiredoors.com/general-metal-doors/',
    'https://www.galaxyfiredoors.com/acoustic-metal-doors-with-powder-coating-finish/',
    'https://www.galaxyfiredoors.com/electrical-shaft-doors-with-powder-coating-finish/',
    'https://www.galaxyfiredoors.com/full-glazed-gi-steel-fire-door-with-powder-coating-finish/',
    'https://www.galaxyfiredoors.com/clean-room-doors-with-powder-coating-finish/'
];

(async () => {
    for (const url of urls) {
        const imgs = await getImages(url);
        console.log(`URL: ${url}`);
        console.log(`Images: ${imgs.slice(0, 5).join(', ')}`);
        console.log('---');
    }
})();
