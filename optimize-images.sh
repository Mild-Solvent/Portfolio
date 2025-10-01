#!/bin/bash

# Image Optimization Script for Portfolio
# This script optimizes images in the images/ directory

echo "🚀 Starting image optimization..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "❌ cwebp is not installed. Installing via Homebrew..."
    brew install webp
fi

# Create WebP versions of large PNG/JPG files
echo "📸 Converting large images to WebP..."

# Find images larger than 500KB and convert them
find images/ \( -name "*.png" -o -name "*.jpg" \) -size +500k | while read -r file; do
    filename=$(basename "$file")
    extension="${filename##*.}"
    name="${filename%.*}"
    webp_file="images/${name}.webp"
    
    if [ ! -f "$webp_file" ]; then
        echo "  Converting: $file"
        cwebp -q 80 "$file" -o "$webp_file"
        
        # Show size comparison
        original_size=$(du -h "$file" | cut -f1)
        webp_size=$(du -h "$webp_file" | cut -f1)
        echo "    Original: $original_size → WebP: $webp_size"
    else
        echo "  Skipping: $webp_file already exists"
    fi
done

echo "✅ Image optimization complete!"
echo ""
echo "📊 Usage Summary:"
echo "   - WebP images will be automatically served to supporting browsers"
echo "   - Original images serve as fallbacks for older browsers"
echo "   - Expected size reduction: 60-90% for most images"
echo ""
echo "🔍 Next Steps:"
echo "   1. Update HTML to use <picture> elements for new optimized images"
echo "   2. Test the site to ensure images load correctly"
echo "   3. Monitor Core Web Vitals for performance improvements"