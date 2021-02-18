#!/bin/bash 

if [  ! -n "$1" ]
then
    cd wxflutter-js-framework
    ./start.sh
    cd ../flutterVueDemo
    ./copy-to-assets.sh
    cd ..
elif [ $1 == "demo" ]
then
    cd ../flutterVueDemo
    ./copy-to-assets.sh
elif [ $1 == "jfm" ]
then
    cd wxflutter-js-framework
    ./start.sh
fi
