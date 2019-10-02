#!/bin/bash
FILES=/posts/*

for f in $FILES
do
    echo "Processing $f file..."
    # take action on each file. $f store current file name
    
    foldername = ${f:0:9}
    mkdir foldername
    mv f ./foldername/index.md
done