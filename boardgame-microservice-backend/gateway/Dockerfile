FROM openjdk:17
ARG JAR_FILE=gateway/target/gateway-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} gateway.jar
ENTRYPOINT ["java","-jar","gateway.jar"]