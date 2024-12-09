# Weather App

A simple and interactive Weather Application that allows users to check the weather information (temperature, humidity, and wind speed) of a city. The application uses the OpenWeatherMap API to fetch real-time weather data and displays it dynamically on the page.

## Features

- **City Search**: Users can input a city name to get real-time weather information.
- **Weather Information**: Displays the temperature (in Celsius), humidity, and wind speed of the entered city.
- **Responsive UI**: The app has a clean, user-friendly design with cards displaying the weather details.
- **Animations**: Smooth animations when the weather data is loaded and displayed.

## How to Use

1. **Enter a City**: Type the name of the city you want to check the weather for in the text input field.
2. **Click "Submit"**: Click the "Submit" button to fetch the weather data for the entered city.
3. **View Weather Data**: The weather information (temperature, humidity, wind speed) will be displayed in cards.
4. **Error Handling**: If the city is not found, an error message will appear prompting you to enter a valid city name.

## Files

- **index.html**: The HTML structure of the Weather App, including input fields, buttons, and result cards.
- **weather.css**: The styling for the app, including layout, animations, and visual effects for the cards.
- **weather.js**: The JavaScript logic for fetching weather data from the OpenWeatherMap API and updating the UI dynamically.

## API Used

- **OpenWeatherMap API**: The app fetches weather data from the OpenWeatherMap API using the following endpoint:
https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={API_KEY}

Replace `{API_KEY}` with your own API key from OpenWeatherMap.

## How to Set Up

1. **Obtain an API Key**: To use the OpenWeatherMap API, sign up on [OpenWeatherMap](https://openweathermap.org/) and get an API key.
2. **Set Up the Project**:
 - Clone this repository or download the source code.
 - Replace the placeholder `key` variable in `weather.js` with your actual OpenWeatherMap API key.

3. **Run the App**: Open `index.html` in a browser to use the Weather App.

## Technologies Used

- **HTML**: For the basic structure of the app.
- **CSS**: For styling the app and creating smooth animations.
- **JavaScript**: For fetching weather data and dynamically updating the UI.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.
