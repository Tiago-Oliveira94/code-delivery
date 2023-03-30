# Code-Delivery

An event-driven platform, resilient and scalable, to create and monitoring deliveries in real-time with: 

Golang: https://github.com/golang/go \
NestJS: https://github.com/nestjs/nest \
TypeScript: https://github.com/microsoft/TypeScript \
Apache Kafka: https://github.com/apache/kafka \
ElasticSearch: https://github.com/elastic/elasticsearch \
Kibana: https://github.com/elastic/kibana \
MongoDB: https://github.com/mongodb/mongo \
Mongoose: https://github.com/Automattic/mongoose \
React: https://github.com/facebook/react \
MaterialUI: https://github.com/mui/material-ui

# How it Works

We have a React frontend where you can choose three routes, with their start and end positions. These routes are persistent in MongoDB and are provided to the frontend via a nodeJS API. Then, when the user chooses a route and starts a race, our nodeJS API will send a message to Kafka, requesting the positions (latitude, longitude) to execute the race. Our golang API will consume this message and send the positions for that particular route to Kafka. And then, our nodeJS API will get this positions and send it to the frontend via a websocket connection. You can run all the races at once, taking advantage of the asynchronous nature of golang.

# Architecture

![diagram-2](https://user-images.githubusercontent.com/46850078/228926388-a5acd2ed-5f3a-4f68-8af6-72f1d99457a2.png)

# Screenshots

![code-delivery](https://user-images.githubusercontent.com/46850078/228926557-06674d05-601e-4e36-b7f9-7e379dac121e.png)

![dashboard](https://user-images.githubusercontent.com/46850078/228926667-74229a5d-fd00-407e-ac16-bde6a0cee092.png)

\
I learned a lot building this, struggled to get this car to move forward on react frontend but it was fun! I hope that it can be useful for you as it was for me! =D
