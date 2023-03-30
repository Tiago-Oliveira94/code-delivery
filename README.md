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
React: https://github.com/facebook/react

# How it Works

We have a React frontend where you can choose three routes, with their start and end positions. These routes are persistent in MongoDB and are provided to the frontend via a nodeJS API. Then, when the user chooses a route and starts a race, our nodeJS API will send a message to Kafka, requesting the positions (latitude, longitude) to execute the race. Our golang API will consume this message and send the positions for that particular route to Kafka. And then, our nodeJS API will get this positions and send it to the frontend via a websocket connection

# Architecture

