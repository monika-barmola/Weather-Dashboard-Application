**Weather Dashboard Application**
----------------------------------

This is a Weather Dashboard web application built using HTML, Tailwind CSS, and JavaScript. The app retrieves real-time weather data from the OpenWeatherMap API and displays the current weather along with a 5-day forecast for any searched city or the user's current location.


**Features**
--------------
Search by City: Enter the name of any city in the world to get its weather information.
Current Location: Use the "Use Current Location" button to fetch weather data based on your geographic coordinates.
Current Weather Data: Displays temperature, wind speed, humidity, and weather condition with icons.
5-Day Forecast: Provides an extended forecast for the next 5 days, showing date, temperature, wind speed, and humidity.
Error Handling: Handles errors gracefully, such as invalid city names or API failures.

** Tech Stack**
----------------

HTML5
Tailwind CSS: A utility-first CSS framework for rapid UI development.
JavaScript: Handles weather data retrieval and interaction.
OpenWeatherMap API: Provides the weather data.

**Getting Started**
--------------------
**Prerequisites**
A modern web browser (Google Chrome, Firefox, etc.).

**Installation**
Clone the repository:
git clone https://github.com/your-username/weather-dashboard.git


**Navigate into the project directory:**

cd weather-dashboard
 OpenWeatherMap API Key: "af1bc06d67c447b640897f21571835c2"

Open app.js.
const API_KEY = "af1bc06d67c447b640897f21571835c2";
Run the application:

Simply open the index.html file in your browser, or you can use a local server if needed.

If you are using VS Code, you can install the Live Server extension to launch the app locally.
A valid API key from OpenWeatherMap.

**Folder Structure**

weather-dashboard/
│
├── index.html        # Main HTML file
├── app.js            # Main JavaScript file with API handling
└── README.md         # Project documentation

**API Information**
OpenWeatherMap API: This project uses the OpenWeatherMap API to fetch weather data. You'll need an API key from OpenWeatherMap. Once you sign up, you can access your key from here.


💻** Demo**
Enter a city name or click "Use Current Location" to get the weather forecast.
Displays real-time weather data, including temperature, wind speed, and humidity.
View the 5-day extended weather forecast below the current weather.

🖼️** Screenshots**
![image](https://github.com/user-attachments/assets/baaa882b-fcc5-49d2-a14e-4977df104d4c)


⚠️** Error Handling**
Invalid City: The app displays an error message if the entered city name is invalid or not found.
API Errors: If the API fails, a user-friendly error message is displayed.


🌟** Future Improvements**
Add hourly forecasts for the current day.
Implement multiple themes (light/dark mode).
Add a map to visually display the city location.


