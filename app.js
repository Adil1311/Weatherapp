let curCity = 'London';
let units = "metric";

// Slectors
let city = document.querySelector(".city");
let forecaste = document.querySelector(".forecast");
let humidity = document.querySelector(".humidity");
let temp = document.querySelector(".temp");
let speed = document.querySelector(".speed");
let weatherIcon = document.querySelector(".weather-icon");

// Search

document.querySelector(".weather-search").addEventListener('submit', e => {
    let search =document.querySelector(".weather-form");
    //Prevent from reload
    e.preventDefault();
    // change current city
    curCity=search.value;
    getWeather();
    search.value ='';

})

function getWeather() {
    const API_KEY = 'e7ca06f4fc810174a01351a7a859b590';


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${curCity}&appid=${API_KEY}&units=${units}`).then(res => res.json()).then(data =>{

    if (data.name == undefined) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".city-temp").style.display = "none"
    }else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".city-temp").style.display = "block"
    }


        city.innerHTML =`${data.name}`,
        temp.innerHTML = `${data.main.temp.toFixed()}&#176`,
        forecaste.innerHTML = `${data.weather[0].main}`,
        humidity.innerHTML = `${data.main.humidity}%`,
        speed.innerHTML =`${data.wind.speed}Km/h`,
        weatherIcon.innerHTML =`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`

      
    })
  
}

document.body.addEventListener('load', getWeather());