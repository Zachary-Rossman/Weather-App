# Weather Search App

A simple weather lookup tool that allows users to search for real-time weather conditions and a 3-day forecast for any U.S.-based location using the WeatherAPI service.

---

## 📝 Description

This application provides:

- A search box allowing users to type **city and state**
- Error-handling for:
  - Blank input
  - Invalid search queries
  - Searches outside the United States
- Display of:
  - City, State, and Country
  - Current temperature, weather condition text, icon, humidity, wind speed, and more
  - A **3-Day Forecast**, including:
    - Tomorrow
    - Day 2 (with date)
    - Day 3 (with date)

Each new search clears the page and replaces it with updated weather information.

---

## 🚀 How to Run the Program

1. Clone this repository
2. Open `index.html` in a browser (no server required)
3. Enter a location (example: `Orlando, FL`)
4. Press **Search**
5. View:
   - 📍 Location information
   - 🌤 Current weather
   - 📅 Multi-day forecast

If the search fails or is outside the U.S., an error box appears instead of results.

---

## 🧠 Example Input

```text
Miami, FL
```
