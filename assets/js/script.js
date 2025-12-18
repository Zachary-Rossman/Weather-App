// Global Variables
let body = document.querySelector(`#body`);
let currentWeatherDiv = document.querySelector(`#current-weather-div`);
let errorDiv = document.querySelector(`#error-div`);
let forecastDiv = document.querySelector(`#forecast-div`);
let locationDiv = document.querySelector(`#location-div`)
let searchBtn = document.querySelector(`#search-button`);
let searchForm = document.querySelector(`#search-form`);
let searchInput = document.querySelector(`#search-input`);

// Functions
function init () {
    // Initial state of page
}

let handleFormSubmit = function (Event) {
    // Prevents page from refreshing
    Event.preventDefault();

    // Clear all previous results
    errorDiv.replaceChildren("")
    locationDiv.replaceChildren("");
    currentWeatherDiv.replaceChildren("");
    forecastDiv.replaceChildren("");

    // Define typed value by user
    let searchValue = searchInput.value;

    // Filter user's input with if/else statement. If there is no input, display an error. If there are no results, display an error. If results are outside of United States, display error with no results. If there are results, display results
        if(searchValue === ""){
            // Define error on DOM
            let errorBox = document.createElement("div");

            // Error styling
            errorBox.className = "bg-red-100 border border-red-300 text-red-900 rounded-xl p-6 mx-auto mt-6 max-w-xl text-center shadow";
        
            // Define errorBox html content
            errorBox.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">⚠️ Error</h2>
            <p class="text-lg">Error: Please search for a location and retry</p>
            `;
            
            // Append errorBox to DOM
            errorDiv.appendChild(errorBox);
        } else { 
            // Fetch API based on user's input
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=aab4a765800244589bc04603251412&q=${searchValue}&days=3&aqi=no&alerts=no`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Call function to display the results onto the page
                displayResults(data);
            })
        }
    };

let displayResults = function(data) {
    
    // Check if data returned an error
    if(data.error) {
        // Clear page of any previous results
        errorDiv.replaceChildren("");
        locationDiv.replaceChildren("");
        currentWeatherDiv.replaceChildren("");
        forecastDiv.replaceChildren("");
            
        // Define error on DOM
        let errorBox = document.createElement("div");

        // Error styling
        errorBox.className = "bg-red-100 border border-red-300 text-red-900 rounded-xl p-6 mx-auto mt-6 max-w-xl text-center shadow";
        
        // Define errorBox html content
        errorBox.innerHTML = `
        <h2 class="text-2xl font-bold mb-2">⚠️ Error</h2>
        <p class="text-lg">Error: Invalid Search!</p>
        `;
            
        // Append errorBox to DOM
        errorDiv.appendChild(errorBox);
    } else {
        // Define location data, current weather, and a 3 day forecast
        let locationData = data.location;
        let currentWeatherData = data.current;
        let forecastWeatherData = data.forecast;

        // Define location details to be appended (Country will later be filtered to ONLY show U.S. based locations!!!)
        let cityName = locationData.name;
        let country = locationData.country;
        let localTime = locationData.localtime;
        let state = locationData.region;

        // Condition is ONLY to be used for icon and text!!!
        let currentConditionData = currentWeatherData.condition;
        
        // Define current weather details to be appended 
        let currentCondition = currentConditionData.text;
        let currentIcon = currentConditionData.icon;
        let currentCloudCover = currentWeatherData.cloud;
        let currentDewPoint = currentWeatherData.dewpoint_f;
        let currentFeelsLike = currentWeatherData.feelslike_f;
        let currentHeatIndex = currentWeatherData.heatindex_f;
        let currentHumidity = currentWeatherData.humidity;
        let currentLastUpdated = currentWeatherData.last_updated;
        let currentPressure = currentWeatherData.pressure_in;
        let currentTemp = currentWeatherData.temp_f;
        let currentUVIndex = currentWeatherData.uv;
        let currentVisibility = currentWeatherData.vis_miles;
        let currentWindDirection = currentWeatherData.wind_dir;
        let currentWindGust = currentWeatherData.gust_mph;
        let currentWindSpeed = currentWeatherData.wind_mph;
        let currentWindChill = currentWeatherData.windchill_f;

        // Define forecast days
        let dayArray = forecastWeatherData.forecastday;

        // Define Specific Days
        let day1 = dayArray[0];
        let day2 = dayArray[1];
        let day3 = dayArray[2];

        // Define Weather Data For Every Day
        let day1WeatherData = day1.day;
        let day2WeatherData = day2.day;
        let day3WeatherData = day3.day;

        // Define Day 1 (Next Day) Weather Details
        let day1LowTemp = day1WeatherData.mintemp_f;
        let day1HighTemp = day1WeatherData.maxtemp_f;
        let day1Humidity = day1WeatherData.avghumidity;
        let day1RainChance = day1WeatherData.daily_chance_of_rain;
        let day1SnowChance = day1WeatherData.daily_chance_of_snow;
        let day1TotalPrecipitation = day1WeatherData.totalprecip_in;
        let day1Visibility = day1WeatherData.avgvis_miles;
        let day1UVIndex = day1WeatherData.uv;

        
        
        // Day 1 Condition
        let day1ConditionData = day1WeatherData.condition;
        let day1ConditionText = day1ConditionData.text;
        let day1conditionIcon = day1ConditionData.icon;

        // Define Day 2 Weather Details
        let day2LowTemp = day2WeatherData.mintemp_f;
        let day2HighTemp = day2WeatherData.maxtemp_f;
        let day2Humidity = day2WeatherData.avghumidity;
        let day2RainChance = day2WeatherData.daily_chance_of_rain;
        let day2SnowChance = day2WeatherData.daily_chance_of_snow;
        let day2TotalPrecipitation = day2WeatherData.totalprecip_in;
        let day2Visibility = day2WeatherData.avgvis_miles;
        let day2UVIndex = day2WeatherData.uv;

        
        
        // Day 2 Condition
        let day2ConditionData = day2WeatherData.condition;
        let day2ConditionText = day2ConditionData.text;
        let day2conditionIcon = day2ConditionData.icon;

        // Define Day 3 Weather Details
        let day3LowTemp = day3WeatherData.mintemp_f;
        let day3HighTemp = day3WeatherData.maxtemp_f;
        let day3Humidity = day3WeatherData.avghumidity;
        let day3RainChance = day3WeatherData.daily_chance_of_rain;
        let day3SnowChance = day3WeatherData.daily_chance_of_snow;
        let day3TotalPrecipitation = day3WeatherData.totalprecip_in;
        let day3Visibility = day3WeatherData.avgvis_miles;
        let day3UVIndex = day3WeatherData.uv;

        
        
        // Day 3 Condition
        let day3ConditionData = day3WeatherData.condition;
        let day3ConditionText = day3ConditionData.text;
        let day3conditionIcon = day3ConditionData.icon;

        // If statement to filter only locations within the United States
        console.log(country)
        if (country !== "United States of America") {
            // Clear page of any previous results
            errorDiv.replaceChildren("");
            locationDiv.replaceChildren("");
            currentWeatherDiv.replaceChildren("");
            forecastDiv.replaceChildren("");
            
            // Define error on DOM
            let errorBox = document.createElement("div");

            // Error styling
            errorBox.className = "bg-red-100 border border-red-300 text-red-900 rounded-xl p-6 mx-auto mt-6 max-w-xl text-center shadow";
        
            // Define errorBox html content
            errorBox.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">⚠️ Error</h2>
            <p class="text-lg">Error: Please search for a valid location within the United States of America!</p>
            `;
            
            // Append errorBox to DOM
            errorDiv.appendChild(errorBox);
        } else {
            // Clear page of any previous results
            locationDiv.replaceChildren("");
            currentWeatherDiv.replaceChildren("");
            forecastDiv.replaceChildren("");

            // Define location, current weather, and forecast on DOM
            let locationCard = document.createElement(`div`);
            let currentWeatherCard = document.createElement(`div`);
            let forecastCard = document.createElement(`div`);
            
            // Define html content of locationCard
            locationCard.innerHTML = `
            <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-xl mx-auto mt-6 shadow text-center">
            <h2 class="text-2xl font-bold mb-2">${cityName}, ${state}</h2>
            <p class="text-lg">${country}</p>
            <p class="text-sm text-gray-600 mt-1">Local Time: ${localTime}</p>
            </div>
            `;

            // Define html content of currentWeatherCard
            currentWeatherCard.innerHTML = `
            <div class="bg-white border rounded-xl p-6 max-w-xl mx-auto mt-6 shadow">
            <div class="flex items-center justify-between mb-4">
            <div>
            <h3 class="text-xl font-bold">Current Weather</h3>
            <p class="text-gray-600">${currentCondition}</p>
            </div>
            <img src="https:${currentIcon}" alt="${currentCondition}">
            </div>
            
            <div class="grid grid-cols-2 gap-4 text-sm">
            <p><strong>Temperature:</strong> ${currentTemp}°F</p>
            <p><strong>Feels Like:</strong> ${currentFeelsLike}°F</p>
            <p><strong>Humidity:</strong> ${currentHumidity}%</p>
            <p><strong>Cloud Cover:</strong> ${currentCloudCover}%</p>
            <p><strong>Wind:</strong> ${currentWindSpeed} mph (${currentWindDirection})</p>
            <p><strong>Wind Gust:</strong> ${currentWindGust} mph</p>
            <p><strong>Pressure:</strong> ${currentPressure} in</p>
            <p><strong>Visibility:</strong> ${currentVisibility} miles</p>
            <p><strong>UV Index:</strong> ${currentUVIndex}</p>
            <p><strong>Dew Point:</strong> ${currentDewPoint}°F</p>
            <p><strong>Heat Index:</strong> ${currentHeatIndex}°F</p>
            <p><strong>Wind Chill:</strong> ${currentWindChill}°F</p>
            </div>
            
            <p class="text-xs text-gray-500 mt-4">Last Updated: ${currentLastUpdated}</p>
            </div>
            `;

            // Define html content of forecastCard
            forecastCard.innerHTML = `
            <div class="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div class="bg-gray-50 border rounded-xl p-5 shadow text-center">
            <h4 class="font-bold text-lg mb-2">Tomorrow</h4>
            <img class="mx-auto" src="https:${day1conditionIcon}" alt="${day1ConditionText}">
            <p class="mb-2">${day1ConditionText}</p>
            <p>High: ${day1HighTemp}°F | Low: ${day1LowTemp}°F</p>
            <p>Humidity: ${day1Humidity}%</p>
            <p>Rain: ${day1RainChance}% | Snow: ${day1SnowChance}%</p>
            <p>Precipitation: ${day1TotalPrecipitation} in</p>
            <p>Visibility: ${day1Visibility} miles</p>
            <p>UV Index: ${day1UVIndex}</p>
            </div>
            
            <div class="bg-gray-50 border rounded-xl p-5 shadow text-center">
            <h4 class="font-bold text-lg mb-2">${day2.date}</h4>
            <img class="mx-auto" src="https:${day2conditionIcon}" alt="${day2ConditionText}">
            <p class="mb-2">${day2ConditionText}</p>
            <p>High: ${day2HighTemp}°F | Low: ${day2LowTemp}°F</p>
            <p>Humidity: ${day2Humidity}%</p>
            <p>Rain: ${day2RainChance}% | Snow: ${day2SnowChance}%</p>
            <p>Precipitation: ${day2TotalPrecipitation} in</p>
            <p>Visibility: ${day2Visibility} miles</p>
            <p>UV Index: ${day2UVIndex}</p>
            </div>

            <div class="bg-gray-50 border rounded-xl p-5 shadow text-center">
            <h4 class="font-bold text-lg mb-2">${day3.date}</h4>
            <img class="mx-auto" src="https:${day3conditionIcon}" alt="${day3ConditionText}">
            <p class="mb-2">${day3ConditionText}</p>
            <p>High: ${day3HighTemp}°F | Low: ${day3LowTemp}°F</p>
            <p>Humidity: ${day3Humidity}%</p>
            <p>Rain: ${day3RainChance}% | Snow: ${day3SnowChance}%</p>
            <p>Precipitation: ${day3TotalPrecipitation} in</p>
            <p>Visibility: ${day3Visibility} miles</p>
            <p>UV Index: ${day3UVIndex}</p>
            </div>

            </div>
            `;
            
            // Append all content to DOM
            locationDiv.appendChild(locationCard);
            currentWeatherDiv.appendChild(currentWeatherCard);
            forecastDiv.appendChild(forecastCard);
        }
    }
}

// Functions calls/Event listeners
init();
searchForm.addEventListener("submit", handleFormSubmit);