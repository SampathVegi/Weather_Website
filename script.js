const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'bcef0c8199msh0c73e737286b140p14532bjsn214e0d93eced',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
};
const getweather = (city)=>{
    cityname.innerHTML=city
fetch('https://weather-api138.p.rapidapi.com/weather?city_name='+city, options)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('temp2').innerText = data.main.temp;
        document.getElementById('temp').innerText = data.main.temp;
        document.getElementById('feels_like').innerText = data.main.feels_like;
        document.getElementById('temp_min').innerText = data.main.temp_min;
        document.getElementById('temp_max').innerText = data.main.temp_max;
        document.getElementById('temp_max2').innerText = data.main.temp_max;
        document.getElementById('pressure').innerText = data.main.pressure;
        document.getElementById('humidity').innerText = data.main.humidity;
        document.getElementById('weather_main').innerText = data.weather[0].main;
        document.getElementById('weather_description').innerText = data.weather[0].description;
        document.getElementById('weather_main2').innerText = data.weather[0].main;
        document.getElementById('wind_speed').innerText = data.wind.speed;
        document.getElementById('wind_speed2').innerText = data.wind.speed;
        document.getElementById('wind_direction').innerText = data.wind.deg;
        document.getElementById('visibility').innerText = data.visibility;
    })
    .catch(err => console.error('Error fetching weather data:', err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("Submit button clicked");
    getweather(city.value)
})
getweather("Visakhapatnam")

// fetch(url, options)
//     .then(response => response.json())
//     .then((response) => {
//         console.log(response);

//         // Access the required data from the response object
//         document.getElementById('temp').innerText = response.main.temp;
//         document.getElementById('feels_like').innerText = response.main.feels_like;
//         document.getElementById('temp_min').innerText = response.main.temp_min;
//         document.getElementById('temp_max').innerText = response.main.temp_max;
//         document.getElementById('pressure').innerText = response.main.pressure;
//         document.getElementById('humidity').innerText = response.main.humidity;
//         document.getElementById('weather_main').innerText = response.weather[0].main;
//         document.getElementById('weather_description').innerText = response.weather[0].description;
//         document.getElementById('wind_speed').innerText = response.wind.speed;
//         document.getElementById('wind_direction').innerText = response.wind.deg;
//         document.getElementById('visibility').innerText = response.visibility;
//     })
//     .catch(err => console.error(err));


// async function fetchWeatherData() {
//     const url = 'https://weather-api138.p.rapidapi.com/weather?city_name=Fergana';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'bcef0c8199msh0c73e737286b140p14532bjsn214e0d93eced',
//             'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
//     }
// };
    

//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();

//         document.getElementById('temp').innerText = data.main.temp;
//         document.getElementById('feels_like').innerText = data.main.feels_like;
//         document.getElementById('temp_min').innerText = data.main.temp_min;
//         document.getElementById('temp_max').innerText = data.main.temp_max;
//         document.getElementById('pressure').innerText = data.main.pressure;
//         document.getElementById('humidity').innerText = data.main.humidity;
//         document.getElementById('weather_main').innerText = data.weather[0].main;
//         document.getElementById('weather_description').innerText = data.weather[0].description;
//         document.getElementById('wind_speed').innerText = data.wind.speed;
//         document.getElementById('wind_direction').innerText = data.wind.deg;
//         document.getElementById('visibility').innerText = data.visibility;
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }

// fetchWeatherData();




