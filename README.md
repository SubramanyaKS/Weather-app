# ⛈ Weather App using React JS


A Simple Weather App which gives information of weather details of particular city across the world using API

#### API

The Application Programming Interface is a set of rules and regulations and standards that allows software programs to interact with each other. It acts as a middleman between two applications, allowing them to exchange data and information

---
## Features

* Search functionality
* Accurate result
* Decent UI
---
## Technology Used

* ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
* OpenWeathermap API
* ![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

---
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

---
## Pre Requisite
* Install ![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
* Installation of [![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) is mandatory with ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
* Login in to [Openweathermap](https://openweathermap.org/api) api website to get your `API key`

---
## Run and Setup

1. Fork the Project and clone Repository using git clone

```
git clone https://github.com/SubramanyaKS/Weather-app.git
```

2.  Install all dependency in package.json

```
npm install
```
3.  Create .env folder and paste the key in variable REACT_APP_API_KEY

```
REACT_APP_API_KEY=<Your openwearhermap API Key>
```

4.  Run application using command

```
npm start
```

5. Automatically open the website in localhost

```
http://localhost/3000
```
---

## Contribution

if you want to contribute to this project. 

1. Fork the repository
2. Create a new branch (any name except main and master)
```
git checkout -b xyz
```
3. Make changes and commit your changes.
```
git commit -m "Changes in xyz"
```
4. Push the changes to new branch.
```
git push origin xyz
```
5. Open a pull request

---
## Deploy

This react website is deployed in github you can see the demo using below link.

[Demo Link](https://subramanyaks.github.io/Weather-app/)


---

<!--Licence-->
## LICENSE

This project is distributed under MIT License read `LICENSE` file for more details .

---
## Credits

[Openweathermap API](https://openweathermap.org/api)

---

If you like the project 🌟 the repository.

Thank you with ❤ Subramanya KS
