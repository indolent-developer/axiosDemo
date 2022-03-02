const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  function (config) {
    const token = "token-" + Date().toString();
    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const login = async (payload) => {
  const { data } = await api.get(`login`);
  console.log(data);
};

login({});
