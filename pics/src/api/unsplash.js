import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID d32e052875457e17000f329acbe9c46df703f11972a14d598c25b86496b5c3e9"
  }
});
