package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"sync"
)

func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: go run main.go <URL>")
		os.Exit(1)
	}
	url := os.Args[1]
	var wg sync.WaitGroup
	var mu sync.Mutex
	ch := make(chan string, 1)
	for i := 0; i < 5; i++ {
		wg.Add(1)
		go downloadPage(url, ch, &wg, &mu)
	}
	wg.Wait()
	close(ch)
}

func downloadPage(url string, ch chan<- string, wg *sync.WaitGroup, mu *sync.Mutex) {
	defer wg.Done()
	response, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching URL: %s\n", err)
		return
	}
	defer response.Body.Close()
	bodyBytes, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Printf("Error reading response body: %s\n", err)
		return
	}
	bodyString := string(bodyBytes)
	mu.Lock()
	defer mu.Unlock()
	ch <- bodyString
	fmt.Println("Downloaded successfully!")
}
