// const axios = require("axios").default;

const apiKey = "8af6b99c11d353b6ab61272f0ea7eae0";

const URL = "https://api.openweathermap.org/data/2.5/weather?";

async function fetch(city, apiKey) {
  return await axios
    .get(`${URL}q=${city}&appid=${apiKey}`)
    .then((response) => response.data);
}

export { fetch };
