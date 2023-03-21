package main

import (
	"log"

	"github.com/Tiago-Oliveira94/code-delivery/infra/kafka"
	"github.com/joho/godotenv"
)

func init() {
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("error loading .env file")
	}
}

func main() {
	producer := kafka.NewKafkaProducer()
	kafka.Publish("Hello World!", "readtest", producer)

	for {
		_ = 1
	}
	// route := routePackage.Route{
	// 	ID:       "1",
	// 	ClientID: "1",
	// }
	// route.LoadPositions()
	// stringJson, _ := route.ExportJsonPositions()
	// fmt.Println(stringJson[1])
}
