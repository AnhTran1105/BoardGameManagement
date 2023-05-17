FROM openjdk:17
ARG JAR_FILE=authservice/target/authservice-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} authservice.jar
ENTRYPOINT ["java","-jar","authservice.jar"]

# docker build --tag=authservice:latest .
# docker run -p8080:8081 authservice:latest