# Case Study :: Session Replay, Logging, Debugging, Analytics

![Technology - Spring Boot](https://img.shields.io/badge/Technology-Spring_Boot-blue)
![Tracing Difficulty - Medium](https://img.shields.io/badge/Tracing_Difficulty-Medium-yellow)
![Implementation Difficulty - Easy](https://img.shields.io/badge/Implementation_Difficulty-Easy-green)

## The Condition

Application usually had a way to be traced when error occurred. However, this usually hard to do on production environment, especially on front-end application. So you are developing a way to overcome these problems by implementing an additional mechanism to log those execution data.

## The Problem

The back-end had successfuly be able to log execution data on production, by harnessing remote logging.
You can access it in [here](http://localhost:8091/actuator/logfile).

However, the front-end have not, and is currently still hard to debug, especially to the fact that, everytime an error occured, it automatically redirect user to error page.

## The Objective

You need to find a way to log an error that comes from the front-end application, so that developer will be able to access its data.

If you wan't to simulate it, you need to do it with 2 people and role-play.
One person acts as a client, and opens the application, and causes the error.
The other person acts as a developer, which receive error report from the client.

The developer, should be able to trace the error remotely, without the need to directly access client's machine.

## The Expected Result

Developers are able to see execution log.
