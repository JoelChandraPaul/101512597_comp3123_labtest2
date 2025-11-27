📌 101512597_comp3123_labtest2 — Weather Application

Created By: Joel Chandra Paul
Student ID: 101512597

📄 Project Overview

This is a weather application built for COMP3123 – Full Stack Development I (Lab Test 2).
The app fetches real-time weather data using the OpenWeatherMap API, displays key information such as:

✔ City & Country
✔ Temperature in °C
✔ Weather condition + description
✔ Feels-like temperature
✔ Humidity
✔ Wind speed
✔ Min & Max temperature

The UI is built using React, styled with a modern glass-card UI, and features automatic weather-based backgrounds that change depending on conditions like Clear, Clouds, Rain, Snow, Mist, Thunderstorm, etc.

📦 Technologies Used
Technology	Purpose
React (Vite/CRA)	UI and component rendering
JavaScript (ES6)	Logic + API handling
OpenWeatherMap API	Live weather data
CSS/Glassmorphism	UI Styling
Environment Variables (.env)	Secure API key handling
🔥 Features
Feature	Status
Real-time Weather API fetch	✅
City Search Input	✅
Dynamic changing background	✅
Weather Icons	✅
Glassmorphism themed UI	✅
Supports ANY city worldwide	✅
🛠 How to Run Locally

Ensure Node.js is installed → then run:

npm install
npm start


Create a .env file in project root with your API key:

REACT_APP_API_KEY=YOUR_OPENWEATHER_KEY_HERE


Restart server after saving .env.