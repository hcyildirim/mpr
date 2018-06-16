const instance = require("axios");

const axios = instance.create({
  baseURL: "https://makeup-api.herokuapp.com/api/v1"
});

export default axios;
