const express = require("express");
const https = require("https");
const app = express();

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");

})

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=a9cfe82cb6bb424e2e2378de94d12904&units=metric";
    https.get(url, function(response) {
    console.log(response.statusCode);

    response.on("data", function(data) {
        const weatherData = JSON.parse(data);
        const location = weatherData.name;
        const temp = weatherData.main.temp;
        const feelsLike = weatherData.main.feels_like;
        const description = weatherData.weather[0].description;
        const iconImg = weatherData.weather[0].icon;
        const imgUrl = "http://openweathermap.org/img/wn/"+iconImg+"@2x.png";
        console.log(temp + " degC," + "\n" + "but feels like " + feelsLike + "degC" + "\n" + "Description: " +description);
        res.write("<h1>The temperature currently in " + location + " is " + temp + " but it kind  of feels like " + feelsLike + " with " + description + "</h1>")
        res.write("<img src=" +imgUrl+ ">");
        res.send();
    })
    })
})



 


app.listen(process.env.PORT || 3000, function() {
    console.log("server started on port 3000");
})