package com.interview.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class Application {
    public String getGreeting() {
        return "Hello World! Via Application";
    }
    public static void main(String[] args) {
        System.out.println(new Application().getGreeting());
        SpringApplication.run(Application.class, args);
    }
}
