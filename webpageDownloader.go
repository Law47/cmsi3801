package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <URL>")
		os.Exit(1)
	}
	url := os.Args[1]
	response, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching URL: %s\n", err)
		return
	}
	bodyBytes, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Printf("", err)
		return
	}
	bodyString := string(bodyBytes)
	fmt.Println(bodyString)
}
