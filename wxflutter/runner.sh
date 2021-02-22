#!/bin/bash 

flutter packages pub run build_runner build clean

flutter packages pub run build_runner build --delete-conflicting-outputs

flutter packages pub run build_runner build