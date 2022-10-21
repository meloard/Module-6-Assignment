function initPage() {
    const cityInput = document.getElementById("city-input");
    const searchInput = document.getElementById("search-button");
    const clearEl = document.getElementById("clear-history");
    const nameEl = document.getElementById("city-name");
    const currentPic = document.getElementById("current-pic");
    const currentTemp = document.getElementById("temperature");
    const currentHumidity = document.getElementById("humidity");
    const currentWind = document.getElementById("wind-speed");
    const historyEl = document.getElementById("history");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    // fetch API + current city info
    const APIKey = 'fd3ef45335d37b1215a0eb12da53adfd';
    function getWeather(cityName) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey + "&units=imperial";
        fetch(queryURL)
        .then(response => response.json())
            .then(function(response) {
                console.log(response)
                
                const currentDate = new Date();
                const day = currentDate.getDate();
                const month = currentDate.getMonth() + 1;
                const year = currentDate.getFullYear();
                nameEl.innerHTML = response.name + " (" + month + "/" + day + "/" + year + ") ";
                let weatherPic = response.weather[0].icon;
                currentPic.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                currentPic.setAttribute("alt", response.weather[0].description);
                currentTemp.innerHTML = "Temperature: " + response.main.temp + " &#176F";
                currentHumidity.innerHTML = "Humidity: " + response.main.humidity + "%";
                currentWind.innerHTML = "Wind Speed: " + response.wind.speed + " MPH";
            
                // 5 Day Forecast
                let cityID = response.id;
                let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey + "&units=imperial";
                fetch(forecastQueryURL)
                .then(response => response.json())
                    .then(function(response) {
                        console.log(response)
                       //  Parse response to display forecast for next 5 days underneath current conditions
                       const forecast = document.querySelectorAll(".forecast");
                        for (i = 0; i < forecast.length; i++) {
                            forecast[i].innerHTML = "";
                            const forecastIndex = i * 8 + 4;
                            const forecastDate = new Date(response.list[forecastIndex].dt * 1000);
                            const forecastDay = forecastDate.getDate();
                            const forecastMonth = forecastDate.getMonth() + 1;
                            const forecastYear = forecastDate.getFullYear();
                            const forecastDateEl = document.createElement("p");
                            forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
                            forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
                            forecast[i].append(forecastDateEl);
                            const forecastWeather = document.createElement("img");
                            forecastWeather.setAttribute("src", "https://openweathermap.org/img/wn/" + response.list[forecastIndex].weather[0].icon + "@2x.png");
                            forecastWeather.setAttribute("alt", response.list[forecastIndex].weather[0].description);
                            forecast[i].append(forecastWeather);
                            const forecastTemp = document.createElement("p");
                            forecastTemp.innerHTML = "Temp: " + response.list[forecastIndex].main.temp + " &#176F";
                            forecast[i].append(forecastTemp);
                            const forecastWind = document.createElement("p");
                            forecastWind.innerHTML = "Wind: " + response.list[forecastIndex].wind.speed + " MPH";
                            forecast[i].append(forecastWind);
                            const forecastHumidity = document.createElement("p");
                            forecastHumidity.innerHTML = "Humidity: " + response.list[forecastIndex].main.humidity + "%";
                            forecast[i].append(forecastHumidity);
                        }
                  })
            });
       
    }
    // Search history
    searchInput.addEventListener("click", function() {
        const searchTerm = cityInput.value;
        getWeather(searchTerm);
        searchHistory.push(searchTerm);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        storeSearchHistory();
    })

    clearEl.addEventListener("click", function() {
        searchHistory = [];
        storeSearchHistory();
    })


    function storeSearchHistory() {
        historyEl.innerHTML = "";
        for (let i = 0; i < searchHistory.length; i++) {
            const historyItem = document.createElement("input");
            historyItem.setAttribute("type", "text");
            historyItem.setAttribute("style", "margin-bottom: 10px;")
            historyItem.setAttribute("readonly", true);
            historyItem.setAttribute("class", "form-control d-block bg-grey");
            historyItem.setAttribute("value", searchHistory[i]);
            historyItem.addEventListener("click", function() {
                getWeather(historyItem.value);
            })
            historyEl.append(historyItem);
        }
    }

    storeSearchHistory();
    if (searchHistory.length > 0) {
        getWeather(searchHistory[searchHistory.length - 1]);
    }
}
initPage();
