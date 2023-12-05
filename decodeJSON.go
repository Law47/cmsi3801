package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

var data []struct {
	State     string   `json:"state-province"`
	Country   string   `json:"country"`
	Domains   []string `json:"domains"`
	WebPages  []string `json:"web_pages"`
	AlphaCode string   `json:"alpha_two_code"`
	Name      string   `json:"name"`
}

func main() {
	url := "http://universities.hipolabs.com/search?name=Loyola+Marymount+University"
	response, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching URL: %s\n", err)
		return
	}
	defer response.Body.Close()
	if err := json.NewDecoder(response.Body).Decode(&data); err != nil {
		fmt.Printf("Error decoding JSON: %s\n", err)
		return
	}
	for _, university := range data {
		fmt.Printf("Name: %s\n", university.Name)
		fmt.Printf("Country: %s\n", university.Country)
		fmt.Printf("State: %s\n", university.State)
		fmt.Printf("Domains: %v\n", university.Domains)
		fmt.Printf("Web Pages: %v\n", university.WebPages)
		fmt.Printf("Alpha Code: %s\n", university.AlphaCode)
	}
}
