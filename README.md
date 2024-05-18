# ⛈ Weather App


A simple weather app built with React.js and utilizes the OpenWeatherMap API to fetch and display weather information for a given location.

#### API

The Application Programming Interface is a set of rules and regulations and standards that allows software programs to interact with each other. It acts as a middleman between two applications, allowing them to exchange data and information


## Features

- The application features a robust search functionality for user-friendly access.
- Ensuring a seamless experience, the UI is responsive and adapts to various devices and screen sizes.
- Users can expect precise and reliable results when utilizing the search feature.
- Current weather conditions, encompassing temperature, humidity, wind speed, and a detailed weather description, are prominently displayed.
- The application efficiently retrieves weather data by either detecting the user's location or accepting a manually entered city name.
- In beta stage, the voice search option provides an innovative and hands-free alternative for user interaction.

## Technology Used

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* OpenWeathermap API
* ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)


## API Details

the details used from the `openweathermap API` is follows:

1. `id` City ID.
2. `name` City name.
3. `sys.country` Country code (GB, JP etc.)
4. `main.temp` Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
5. `main.feels_like` Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
6. `main.pressure` Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
7. `main.humidity` Humidity, %
8. `main.temp_min` Minimum temperature at the moment. This is minimal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
9. `main.temp_max` Maximum temperature at the moment. This is maximal currently observed temperature (within large megalopolises and urban areas). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
10. `coord.lon` City geo location, longitude.
11. `coord.lat` City geo location, latitude.
12. `weather.description` Weather condition within the group. You can get the output in your language.
13. `weather.icon` Weather icon id


## Pre Requisite
* Install ![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
* Installation of [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) is mandatory with ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
* Login in to [Openweathermap](https://openweathermap.org/api) api website to get your `API key`


## Run and Setup

1. Fork the Project and clone Repository using git clone

```
git clone https://github.com/SubramanyaKS/Weather-app.git
```
2. Navigate to the project directory:

```
cd Weather-app
```
3.  Install all dependency in package.json

```
npm install
```
4.  Obtain an API key from OpenWeatherMap:

      Visit the OpenWeatherMap website and sign up for an account.After signing in, go to your account dashboard and generate an API key.

5.  Create a .env file in the root directory of the project and add your API key:

```
REACT_APP_API_KEY=<Your openwearhermap API Key>
```

6.  Start the development server using command:

```
npm start
```

7. Open your browser and navigate to `http://localhost:3000` to see the app running.

## Contribution

We welcome contributions! If you'd like to contribute to Weather-app, please follow our [Contribution Guidelines](https://github.com/SubramanyaKS/Weather-app/blob/main/CONTRIBUTING.md).


## Deploy

Weather App is live and ready for you to explore! Visit [WeatherApp](https://subramanyaks.github.io/Weather-app/)


## Author

[Subramanya K S](https://subramanyaks.github.io/)

<!--Licence-->
## LICENSE

This project is distributed under MIT License read `LICENSE` file for more details .


## Credits

[Openweathermap API](https://openweathermap.org/api)
[Fontawesome Icons](https://fontawesome.com/v6/icons)


If you like the project 🌟 the repository.

Thank you with ❤ Subramanya KS
