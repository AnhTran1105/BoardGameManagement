#!/bin/bash hello world

# Change directory to boardgame-microservice-backend
cd boardgame-microservice-backend

# Load environment variables from .env file
source .env

docker-compose -f docker-compose.config.yaml up --force-recreate --build -d

declare -A service1=(
    ["name"]=authservice
    ["port"]=8081
)
declare -A service2=(
    ["name"]=userservice
    ["port"]=8082
)
declare -A service3=(
    ["name"]=contractservice
    ["port"]=8083
)
declare -A service4=(
    ["name"]=boardgameservice
    ["port"]=8084
)

file="docker-compose.service.yaml"
mapfile -t lines < "$file"

declare -n service
for service in ${!service@}; do

    # Clear the contents of .env file
    echo -n > .env

    # Write variable to .env file
    SERVICE_NAME=${service[name]}
    SERVICE_PORT=${service[port]}
    printf "SERVICE_NAME=${SERVICE_NAME}\nSERVICE_PORT=${SERVICE_PORT}\n" >> .env

    # Write service name to docker-compose file
    lines[2]="  ${SERVICE_NAME}:"
    printf '%s\n' "${lines[@]}" > "$file"

    docker-compose -f docker-compose.service.yaml up --force-recreate --build -d

done

echo "All services started"

# Clear the contents of .env file
echo -n > .env

# Reset service name to docker-compose file
lines[2]="  service:"
printf '%s\n' "${lines[@]}" > "$file"


# docker ps -aq | xargs docker stop | xargs docker rm 
# docker system prune -a --volumes

