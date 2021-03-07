#!/bin/bash 
 
npm run build
cp -rf dist/* ../../wxflutter/assets/bundlejs
cp -rf wxflutter.app.json ../../wxflutter/assets/

echo "Build completed."
