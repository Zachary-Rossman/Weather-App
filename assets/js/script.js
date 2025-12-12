// Steps for project

// STEP 1
// Capture user's input and put it into API link

// STEP 2
// Build fetch for API data

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

    // Define typed value by user
    let searchValue = searchInput.value;

    // Console log for user
    console.log(searchValue);
}

// Functions calls/Event listeners
init();