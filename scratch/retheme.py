import os

replacements = {
    # Section backgrounds & gradients
    "bg-gradient-to-br from-orange-900 via-orange-700 to-red-900": "bg-gradient-to-br from-blue-950 via-blue-900 to-red-950",
    "bg-gradient-to-br from-orange-900/80 via-orange-700/70 to-red-900/80": "bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-red-950/80",
    "bg-gradient-to-br from-orange-900 via-red-900 to-orange-900": "bg-gradient-to-br from-blue-950 via-red-950 to-blue-950",
    "bg-gradient-to-br from-orange-900 via-red-800 to-gray-900": "bg-gradient-to-br from-blue-950 via-red-950 to-gray-900",
    "bg-gradient-to-r from-orange-600 to-red-700": "bg-gradient-to-r from-blue-900 to-red-700",
    "bg-gradient-to-r from-orange-600 to-red-600": "bg-gradient-to-r from-blue-900 to-red-600",
    "from-orange-600 to-red-700": "from-blue-900 to-red-700",
    "from-orange-600 to-red-600": "from-blue-900 to-red-600",
    "from-orange-500 to-red-600": "from-blue-700 to-red-600",
    "from-orange-500 to-red-500": "from-blue-700 to-red-500",
    "from-red-600 to-orange-600": "from-red-600 to-blue-900",
    "from-amber-500 to-orange-600": "from-red-500 to-blue-900",
    "from-amber-600 to-yellow-600": "from-blue-900 to-blue-700",
    "from-orange-600/20 to-red-600/20": "from-blue-900/20 to-red-600/20",
    "from-amber-600/20 to-orange-600/20": "from-blue-900/20 to-red-600/20",
    "from-red-600/20 to-orange-600/20": "from-red-600/20 to-blue-900/20",
    "bg-gradient-to-br from-orange-50 to-amber-50": "bg-gradient-to-br from-blue-50 to-red-50",
    "bg-gradient-to-br from-orange-50 to-gray-50": "bg-gradient-to-br from-blue-50 to-gray-50",
    "from-orange-50 to-gray-50": "from-blue-50 to-gray-50",

    # Base Colors & Badges
    "bg-orange-600": "bg-red-600",
    "bg-orange-100": "bg-red-100",
    "bg-orange-50": "bg-blue-50",
    "text-orange-600": "text-red-600",
    "text-orange-700": "text-red-700",
    "text-orange-200": "text-red-200",
    "text-orange-100": "text-red-100",
    "text-orange-400": "text-red-400",
    "text-amber-400": "text-red-500",
    "bg-amber-400": "bg-red-600",
    "hover:bg-amber-300": "hover:bg-red-700",
    "hover:shadow-amber-400/50": "hover:shadow-red-500/50",
    "hover:text-orange-700": "hover:text-red-700",
    "hover:text-orange-200": "hover:text-red-200",
    "hover:bg-orange-700": "hover:bg-red-700",
    "text-orange-200": "text-red-200",
    
    # Borders & Accents
    "border-orange-500/30": "border-red-500/30",
    "border-amber-500/30": "border-red-500/30",
    "hover:border-orange-500": "hover:border-red-600",
    "group-hover:border-orange-500": "group-hover:border-red-600",
    "group-hover:text-orange-400": "group-hover:text-red-500",
    "shadow-orange-500/20": "shadow-red-500/20",
    "focus:border-orange-600": "focus:border-blue-900",
    "focus:ring-orange-200": "focus:ring-blue-200",
    "border-orange-600": "border-red-600",
    "border-orange-200": "border-red-200",
    "border-t-4 border-orange-600": "border-t-4 border-blue-900",
    "border-t-4 border-amber-600": "border-t-4 border-red-600",
    "border-t-4 border-red-600": "border-t-4 border-red-600",
    "bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900": "bg-gradient-to-br from-blue-950 via-blue-900 to-red-950",
    "text-orange-600 font-bold mr-3": "text-red-600 font-bold mr-3",
    "text-orange-600 mr-2": "text-red-600 mr-2",
}

files_to_retheme = [
    "/Users/saad/Developer/doorswebsite/app/page.tsx",
    "/Users/saad/Developer/doorswebsite/app/about/page.tsx",
    "/Users/saad/Developer/doorswebsite/app/contact/page.tsx",
    "/Users/saad/Developer/doorswebsite/app/products/page.tsx",
]

for file_path in files_to_retheme:
    if os.path.exists(file_path):
        with open(file_path, "r") as f:
            content = f.read()
        
        orig_content = content
        for search, replace in replacements.items():
            content = content.replace(search, replace)
        
        if content != orig_content:
            with open(file_path, "w") as f:
                f.write(content)
            print(f"Rethemed: {file_path}")
        else:
            print(f"No changes in: {file_path}")
    else:
        print(f"Not found: {file_path}")
