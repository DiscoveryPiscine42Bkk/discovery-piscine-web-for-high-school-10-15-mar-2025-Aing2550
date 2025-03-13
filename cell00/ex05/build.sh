#!/bin/bash

# Check if arguments are supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through all arguments and create directories
for arg in "$@"; do
    mkdir -p "ex$arg"
done