import axios from "axios";

export const springCases = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://springbootonheroku.herokuapp.com",
  responseType: "json"
});

export const sfAPI = axios.create({
  baseURL: "http://localhost:5000",
  responseType: "json"
});
