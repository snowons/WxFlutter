#!/bin/bash 

echo "Build WxFlutter Weex JS Framework from source...."


npm run build:jsfm


echo "WxFlutter JS Framework build completed."

# Copy built JS resources to their destination.

cp dist/wxflutter-weex-js-framework.js ../../wxflutter/assets/js/

echo "Build completed."
