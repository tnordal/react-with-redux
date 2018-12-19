import axios from "axios";

const KEY = "AIzaSyASsJL4S38SAFPW_63K9CC7KD28LOP7JJM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
