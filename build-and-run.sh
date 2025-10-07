#!/bin/bash

# Build the image with host networking to avoid the veth interface issue
echo "Building Docker image with host networking..."
docker build --network host -t stingray-landing-app -f Dockerfile.dev .

if [ $? -eq 0 ]; then
    echo "Build successful. Now running docker-compose..."
    docker-compose up
else
    echo "Build failed!"
    exit 1
fi