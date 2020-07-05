#!/bin/bash
folders=(2019november 2019december 2020january 2020feburary 2020march 2020april 2020may 2020june)
copy_from=~/Documents/careerdevs/javascript101/classwork
for f in "${folders[@]}"
do
    message="Copied $f"
    git checkout -b $f
    mkdir $f 
    cp -r $copy_from/$f/* $f
    git add -A && git commit -m $message
    git push origin $f
    echo $message
done