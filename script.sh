#!/bin/bash

echo "Enter 1 to build the image and 0 to stop the container"
read -p "Enter your choice: " choice
if [ $choice -eq 1 ]; then
    sudo docker compose up -d
elif [ $choice -eq 0 ]; then
     sudo docker compose down
else
     echo "Invalid input"
fi
exit 0


