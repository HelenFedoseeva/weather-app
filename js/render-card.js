import { fetchWeather } from "./fetch.js";

const cardRootRef = document.getElementById("root");
const valueRef = document.querySelector(".main__label-input");
const formRef = document.querySelector(".main-form");

formRef.addEventListener("submit", getValue);

function getValue(e) {
  e.preventDefault();
  const value = e.target[0].value;

  fetchWeather(value)
    .then((data) => renderCard(data))
    .catch((error) => console.log(error));
}

function renderCard(data) {
  const temp = Ktransform(data.main.temp);

  const markup = `
    <h2>${data.name}</h2>
    <div><span>${temp}°С</span></div>`;

  cardRootRef.innerHTML = markup;
}

const Ktransform = (kelvin) => {
  return Math.floor(kelvin - 273.15);
};
