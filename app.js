const express = require("express");
const https = require("https");
const ejs = require("ejs");
const moment = require("moment");
const _ = require("lodash");
const app = express();

const bodyParser = require("body-parser");
const { response } = require("express");
const { nextTick } = require("process");
const { Console } = require("console");

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const Home =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let weatherData = "";
let weatherPastDay1 = "";
let weatherPastDay2 = "";
let weatherPastDay3 = "";
let weatherPastDay4 = "";
let weatherPastDay5 = "";
let responseCode = "";

let subtractedDays1 = "";
let subtractedDays2 = "";
let subtractedDays3 = "";
let subtractedDays4 = "";
let subtractedDays5 = "";

let justDay1 = "";
let justDay2 = "";
let justDay3 = "";
let justDay4 = "";
let justDay5 = "";

let hourly = "";
let hourly1 = "";
let hourly2 = "";
let hourly3 = "";
let hourly4 = "";
let hourly5 = "";

let description1 = "";
let description2 = "";
let description3 = "";
let description4 = "";
let description5 = "";

let justMonth1 = "";
let justMonth2 = "";
let justMonth3 = "";
let justMonth4 = "";
let justMonth5 = "";

let weatherLat = "";
let weatherLon = "";
let weatherUnixDate1 = "";
let weatherUnixDate2 = "";
let weatherUnixDate3 = "";
let weatherUnixDate4 = "";
let weatherUnixDate5 = "";

app.get("/", function (req, res) {
  res.render("weather", {
    title: "Home",
    homeText: Home,
  });
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
  https.get(url, function (response) {
    // console.log(response.statusCode);

    response.on("data", function (data) {
      weatherData = JSON.parse(data);
      console.log(weatherData);
      hourly = weatherData.weather[0].icon;
      weatherLat = weatherData.coord.lat;
      weatherLon = weatherData.coord.lon;

      var date = moment.unix(weatherData.dt);
      let dateFormat = moment.unix(weatherData.dt).format("MMM");
      subtractedDays1 = moment(date).subtract(1, "days");
      subtractedDays2 = moment(date).subtract(2, "days");
      subtractedDays3 = moment(date).subtract(3, "days");
      subtractedDays4 = moment(date).subtract(4, "days");
      subtractedDays5 = moment(date).subtract(5, "days");
      justMonth1 = subtractedDays1.format("MMM");
      justMonth2 = subtractedDays2.format("MMM");
      justMonth3 = subtractedDays3.format("MMM");
      justMonth4 = subtractedDays5.format("MMM");
      justMonth5 = subtractedDays5.format("MMM");
      justDay1 = subtractedDays1.format("DD");
      justDay2 = subtractedDays2.format("DD");
      justDay3 = subtractedDays3.format("DD");
      justDay4 = subtractedDays4.format("DD");
      justDay5 = subtractedDays5.format("DD");
      weatherUnixDate1 = moment(subtractedDays1).unix();
      weatherUnixDate2 = moment(subtractedDays2).unix();
      weatherUnixDate3 = moment(subtractedDays3).unix();
      weatherUnixDate4 = moment(subtractedDays4).unix();
      weatherUnixDate5 = moment(subtractedDays5).unix();

      res.redirect("/get/" + query);
    });
  });
});

app.get("/get/:redirect", function (req, res) {
  const requestedPage = _.capitalize(req.params.redirect);

  const urlTimemachine1 =
    "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +
    weatherLat +
    "&lon=" +
    weatherLon +
    "&dt=" +
    weatherUnixDate1 +
    "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
  https.get(urlTimemachine1, function (responseDay1) {
    console.log(responseDay1.statusCode);
    responseDay1.on("data", function (data) {
      weatherPastDay1 = JSON.parse(data);
      hourly1 = weatherPastDay1.hourly[12].weather[0].icon;
      description1 = weatherPastDay1.hourly[12].weather[0].description;
      console.log(hourly1);
      console.log(description1);
    });
  });
  const urlTimemachine2 =
    "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +
    weatherLat +
    "&lon=" +
    weatherLon +
    "&dt=" +
    weatherUnixDate2 +
    "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
  https.get(urlTimemachine2, function (responseDay2) {
    console.log(responseDay2.statusCode);

    responseDay2.on("data", function (data) {
      weatherPastDay2 = JSON.parse(data);
      hourly2 = weatherPastDay2.hourly[12].weather[0].icon;
      description2 = weatherPastDay2.hourly[12].weather[0].description;
      console.log(hourly2);
      console.log(description2);
    });
  });
  const urlTimemachine3 =
    "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +
    weatherLat +
    "&lon=" +
    weatherLon +
    "&dt=" +
    weatherUnixDate3 +
    "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
  https.get(urlTimemachine3, function (responseDay3) {
    console.log(responseDay3.statusCode);

    responseDay3.on("data", function (data) {
      weatherPastDay3 = JSON.parse(data);
      hourly3 = weatherPastDay3.hourly[12].weather[0].icon;
      description3 = weatherPastDay3.hourly[12].weather[0].description;
      console.log(hourly3);
      console.log(description3);
    });
  });
  const urlTimemachine4 =
    "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +
    weatherLat +
    "&lon=" +
    weatherLon +
    "&dt=" +
    weatherUnixDate1 +
    "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
  https.get(urlTimemachine4, function (responseDay4) {
    console.log(responseDay4.statusCode);

    responseDay4.on("data", function (data) {
      weatherPastDay4 = JSON.parse(data);
      hourly4 = weatherPastDay4.hourly[12].weather[0].icon;
      description4 = weatherPastDay4.hourly[12].weather[0].description;
      console.log(hourly4);
      console.log(description4);
    });
  });
  const urlTimemachine5 =
    "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=" +
    weatherLat +
    "&lon=" +
    weatherLon +
    "&dt=" +
    weatherUnixDate5 +
    "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
  https.get(urlTimemachine5, function (responseDay5) {
    console.log(responseDay5.statusCode);

    responseDay5.on("data", function (data) {
      weatherPastDay5 = JSON.parse(data);
      hourly5 = weatherPastDay5.hourly[12].weather[0].icon;
      description5 = weatherPastDay5.hourly[12].weather[0].description;
      console.log(hourly5);
      console.log(description5);

      res.redirect("/get/weather/" + requestedPage);
    });
  });
});

app.get("/get/weather/:cityWeather", function (req, res) {
  // imgUrl = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png";

  res.render("cityWeather", {
    title: !weatherData.name ? "input search" : weatherData.name,
    name: !weatherData.name ? "City" : weatherData.name,
    country: weatherData.sys.country,
    weatherImg: "http://openweathermap.org/img/wn/" + hourly + "@2x.png",
    main: weatherData.weather[0].main,
    description: weatherData.weather[0].description,
    tempHi: weatherData.main.temp_max,
    tempLo: weatherData.main.temp_min,
    weatherimg1: "http://openweathermap.org/img/wn/" + hourly1 + "@2x.png",
    weatherimg2: "http://openweathermap.org/img/wn/" + hourly2 + "@2x.png",
    weatherimg3: "http://openweathermap.org/img/wn/" + hourly3 + "@2x.png",
    weatherimg4: "http://openweathermap.org/img/wn/" + hourly4 + "@2x.png",
    weatherimg5: "http://openweathermap.org/img/wn/" + hourly5 + "@2x.png",
    feels_like: weatherData.main.feels_like,
    humidity: weatherData.main.humidity,
    wind_speed: weatherData.wind.speed,
    description1: description1,
    description2: description2,
    description3: description3,
    description4: description4,
    description5: description5,
    justMonth1: justMonth1,
    justDay1: justDay1,
    justDay2: justDay2,
    justDay3: justDay3,
    justDay4: justDay4,
    justDay5: justDay5,
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server started on port 3000");
});
