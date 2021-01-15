#!/bin/bash 

if [  ! -n "$1" ]
then
    cd wxflutter-js-framework
    ./start.sh
    cd ../flutterVueDemo
    ./start.sh
    cd ..
elif [ $1 == "demo" ]
then
    cd ../flutterVueDemo
    ./start.sh
elif [ $1 == "jfm" ]
then
    cd wxflutter-js-framework
    ./start.sh
fi
