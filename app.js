const BASE_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "af1bc06d67c447b640897f21571835c2"; // Your OpenWeatherMap API key

// Event listener for the Search button
document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value.trim();
    
    if (city !== "") {
        fetchWeatherData(city);
    } else {
        showError("Please enter a city name.");
    }
});

// Fetch Weather Data by City Name
function fetchWeatherData(city) {
    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);  // Display weather info
                fetchExtendedForecast(data.coord.lat, data.coord.lon);  // Fetch 5-day forecast
            } else {
                showError("City not found.");  // Display error if city is invalid
            }
        })
        .catch(() => {
            showError("Failed to fetch data. Please try again.");
        });
}

// Display Current Weather Data
function displayWeatherData(data) {
    const cityName = document.getElementById('cityName');
    const weatherIcon = document.getElementById('weatherIcon');
    const temperature = document.getElementById('temperature');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');

    cityName.textContent = `${data.name} (${new Date().toISOString().split('T')[0]})`;
    temperature.textContent = data.main.temp.toFixed(2);
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById('weatherInfo').classList.remove('hidden');
    document.getElementById('extendedForecast').classList.remove('hidden');
}

// Fetch and Display 5-Day Forecast
function fetchExtendedForecast(lat, lon) {
    const url = `${BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayExtendedForecast(data);
        })
        .catch(() => {
            showError("Failed to fetch the extended forecast.");
        });
}

// Display 5-Day Forecast
function displayExtendedForecast(data) {
    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';  // Clear previous forecast data

    const dailyData = data.list.filter((_, index) => index % 8 === 0);  // Get forecast for every 8th timestamp (daily)

    dailyData.forEach(day => {
        const date = new Date(day.dt_txt).toDateString();
        const temp = `${day.main.temp.toFixed(2)}°C`;
        const wind = `${day.wind.speed.toFixed(2)} M/S`;
        const humidity = `${day.main.humidity}%`;
        const icon = day.weather[0].icon;

        forecastContainer.innerHTML += `
            <div class="bg-gray-200 p-4 rounded-lg shadow">
                <h4 class="font-bold">${date}</h4>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather Icon" class="w-12 h-12">
                <p>Temp: ${temp}</p>
                <p>Wind: ${wind}</p>
                <p>Humidity: ${humidity}</p>
            </div>
        `;
    });
}

// Show Error Message
function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');  
}
