#!/bin/bash

# declare time: 14

# declare file
file="keep-server.sh"
mapfile -t lines < "$file"

# maintaining server
declare timing=0
while true; do

    echo "Server has been starting for $timing minutes"

    lines[2]="# declare time: $timing"
    printf '%s\n' "${lines[@]}" > "$file"

    if ((timing % 15 == 0)); then
        docker restart $(docker ps -q)
    fi

    ((timing++))

    sleep 60
done
