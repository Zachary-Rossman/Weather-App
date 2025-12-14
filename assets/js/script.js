// STEP 3
// Build error pages

// STEP 4
// Build DOM display of results based on user's filters

// STEP 5
// Make sure page clears with every results without refreshing, and make sure project is fully functional

// STEP 6
// Style DOM

// Global Variables
let body = document.querySelector(`#body`);
let currentWeatherDiv = document.querySelector(`#current-weather-div`);
let forecastDiv = document.querySelector(`#forecast-div`);
let locationDiv = document.querySelector(`#location-div`)
let searchBtn = document.querySelector(`#search-button`);
let searchForm = document.querySelector(`#search-form`);
let searchInput = document.querySelector(`#search-input`);

// Functions
function init () {
    // Initial state of page
    searchForm.addEventListener("submit", handleFormSubmit);
}

let handleFormSubmit = function (Event) {
    // Prevents page from refreshing
    Event.preventDefault();

    // Clear all previous results

    // Define typed value by user
    let searchValue = searchInput.value;
    
    // Fetch API based on user's input
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=aab4a765800244589bc04603251412&q=${searchValue}&days=3&aqi=no&alerts=no`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        displayResults(data);
    })
}

let displayResults = function(data) {
    // Define location data, current weather, and a 3 day forecast
    let locationData = data.location;
    let currentWeatherData = data.current;
    let forecastWeatherData = data.forecast;

    // Define location details to be appended later (Country will later be filtered to ONLY show U.S. based locations!!!)

    // Define current weather details to be appended later

    // Define forecast details to be appended later

    // Console logs for testing
    console.log(locationData);
    console.log(currentWeatherData);
    console.log(forecastWeatherData);

    // Filter user's input with if/else statement. If there is no input, display an error. If there are no results, display an error. If results are outside of United States, display error with no results. If there are results, display results
}

// Functions calls/Event listeners
init();