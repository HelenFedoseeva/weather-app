import { fetchWeather } from "./fetch.js";

const cardRootRef = document.getElementById("root");
const valueRef = document.querySelector(".main__label-input");
const formRef = document.querySelector(".main-form");

formRef.addEventListener("submit", getValue);

function getValue(e) {
  e.preventDefault();
  const value = e.target[0].value;

  fetchWeather(value)
    .then((data) => {
      console.log(data);
      renderCard(data);
    })
    .catch((error) => console.log(error));

  e.target[0].value = "";
}

function renderCard(data) {
  const temp = Ktransform(data.main.temp);

  const markup = `
    <div class='root__card'>
      <h2 class='root__card-title'>${data.name}</h2>
      <div class='root__card-about'>
        <img class='root__card-img' src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>
        <span class='root__card-temp'>${temp}°С</span>
        <img class='root__card-img' src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png"/>
      </div>
      <p class='root__card-description'>${data.weather[0].main}</p>
    </div>
    `;

  cardRootRef.innerHTML = markup;
}

const Ktransform = (kelvin) => {
  return Math.floor(kelvin - 273.15);
};

fetchWeather("miami")
  .then((data) => {
    console.log(data);
    renderCard(data);
  })
  .catch((error) => console.log(error));
