
const apiKey = "2b69d40c95e25601f0b2505156b65ae1"
function getWeather() {

  // Get the user input from the input field
const location = document.getElementById("location").value;

// API endpoint for current weather
  
const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`; 
  
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
   // Display current weather data
  const weatherData = {
  city: data.name,
  temperature: Math.round(data.main.temp - 273.15), // Convert temperature from Kelvin to Celsius
  description: data.weather[0].description,
        };
  
  document.getElementById("current-weather").innerHTML = `
  <h2>${weatherData.city}</h2>
  <p>Temperature: ${weatherData.temperature} °C</p>
  <p>Description: ${weatherData.description}</p>
        `;
  
        // Get forecast data
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}`; // API endpoint for forecast
  
  fetch(forecastUrl)
  .then((response) => response.json())
          .then((data) => {
            // Display forecast data for the next 3 days
            const forecastData = data.list.filter(
              (item) => item.dt_txt.includes("12:00:00") // Filter out forecast data for 12:00 PM only
            );
  
            let forecastHtml = "";
  
            forecastData.slice(0, 7).forEach((item) => {
              const forecast = {
                date: item.dt_txt.split(" ")[0],
                temperature: Math.round(item.main.temp - 273.15),
                description: item.weather[0].description,
              };
  
              forecastHtml += `
                <div class="forecast">
                  <p>Date: ${forecast.date}
                  <p>Temperature: ${forecast.temperature} °C</p>
                  <p>Description: ${forecast.description}</p>
                </div>
              `;
            });
  
            document.getElementById("forecast").innerHTML = forecastHtml;
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  }
  
  