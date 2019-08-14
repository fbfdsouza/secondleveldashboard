import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://springbootonheroku.herokuapp.com",
  responseType: "json"
});
