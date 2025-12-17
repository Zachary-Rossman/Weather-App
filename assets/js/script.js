// STEP 4
// Build DOM display of results based on user's filters

// STEP 5
// Make sure page clears with every results without refreshing, and make sure project is fully functional

// STEP 6
// Style DOM

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
        

        // Define forecast details to be appended

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
    }
}

// Functions calls/Event listeners
init();
searchForm.addEventListener("submit", handleFormSubmit);