#!/bin/bash

# Build the production image with host networking to avoid the veth interface issue
echo "Building production Docker image with host networking..."
docker build --network host -t maxthemerman/stingray-landing:prod -f Dockerfile .

if [ $? -eq 0 ]; then
    echo "Build successful. Image tagged as maxthemerman/stingray-landing:prod"
    echo "You can now push to DockerHub with: docker push maxthemerman/stingray-landing:prod"
    echo "Or run locally with: docker run -p 80:80 maxthemerman/stingray-landing:prod"
else
    echo "Build failed!"
    exit 1
fi