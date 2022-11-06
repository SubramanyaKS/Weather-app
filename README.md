# Weather App


This is Simple Weather App which gives information of weather details of particular city across the world.


---
### Features

* Search functionality
* Accurate result
* Decent UI
---
### Technology Used

* React JS 
* Bootstrap
* OpenWeathermap API

---
#### API Details

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
12. `weather.description` Weather condition within the group. You can get the output in your language. Learn more
13. `weather.icon` Weather icon id

---
### Pre Requisite
* Installation of [node](https://nodejs.org/en/) is mandatory with npm 
* Login in to [Openweathermap](https://openweathermap.org/api) api website for to get your `API key`

---
### Run and Setup

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
REACT_APP_API_KEY=<Your API Key>
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

### Contribution

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
### Deploy

[Link](https://subramanyaks.github.io/Weather-app/)


---

<!--Licence-->
### LICENSE

This project is distributed under MIT License read `LICENSE` file for more details .

---

If you like the project 🌟 the repository.

Thank you with ❤ Subramanya KS
