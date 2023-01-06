const apikey = "e71242303ffc55be4689f300c027a3ba";
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const showWeatherData = (city) => {
    console.log(city);
}



searchBtn.addEventListener("click", (ev) => {
    ev.preventDefault();

    const city = cityInput.value;

    console.log(city)
})