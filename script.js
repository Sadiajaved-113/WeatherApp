
const apiKey = "7d2865394178617d6beefea0698bceb9";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkWeather(city){
       const response = await fetch(apiUrl + city);
       var data = await response.json();

       console.log(data);

       document.querySelector(".city").innerHTML = data.name;
       document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
       document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
       document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";
}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
});
