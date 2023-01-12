const apiKey = "8af6b99c11d353b6ab61272f0ea7eae0";

const URL = "https://api.openweathermap.org/data/2.5/weather?";

function fetchWeather(city) {
  return fetch(`${URL}q=${city}&appid=${apiKey}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch((error) => console.log(error));
}

export { fetchWeather };
