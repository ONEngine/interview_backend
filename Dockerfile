FROM openjdk:17-jdk-alpine

WORKDIR /app

# Copy only the necessary build files
COPY build.gradle settings.gradle ./
COPY gradlew gradlew.bat ./
COPY gradle gradle/
COPY src src/

# Grant permissions to gradlew
RUN chmod +x ./gradlew

# Build the application
RUN ./gradlew build --no-daemon

# Expose the port your app runs on
EXPOSE 8080

# Use the exact JAR filename
CMD ["java", "-jar", "build/libs/interview_backend-1.0.0.jar"]