#!/bin/bash 
 
npm run build
cp -rf dist/* ../../wxflutter/assets/bundlejs


echo "Build completed."
