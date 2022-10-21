# Pseudocode for Challenge 6
## Weather Dashboard

### How do I get the weather data?
-> Is there a website THAT IS FREE AND PUBLIC cause I ain't paying money that provides accurate weather information?
-> If there is one, what CREDENTIALS DO I NEED?
https://openweathermap.org/api/one-call-api 
https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys

ADVICE COLUMN = for this openweathermap api, you will access TWO SEPARATE API CALLS to get this one. (there are two separate urls from the openweathermap website)

### I need to do the following:
1) I need to accept a user input that is a city name and it returns the CURRENT DAY'S WEATHER, UV INDEX, WINDS (MPH), HUMIDITY, AND AN IMAGE that displays the current weather. (cloudy = cloudy image) (as it's own card, and it's the biggest)

2) After returning the CURRENT DAY'S WEATHER, I need to POPULATE on the page a 5 Day forecast starting from the next day. The information returning will be the same information. HOWEVER, will be stored in smaller blocks. 

3) I need to find a way to PERSIST the previous cities that were searched. 
 - And when you click on one of the buttons of the previous city, their weather data will re-populate the page. 

### Smallest Steps Possible
0) Very first thing, write a function that calls the openweathermap api and see if I can console.log the data.

1) Let's try to figure out my HTML file structure. What is STATIC vs What is DYNAMIC?
- Navbar = Weather Dashboard
- Search for a City with the SearchBar AND the Search Button
- Maybe one div that we call TodayWeather that will be used to APPEND the weather data when called.
- Maybe another div down below that you can append the 5-day forecast.(I think the text 5 day forecast is always there?)
- Maybe another div/section where we can append all the PREVIOUS searches we've done.

2) Either using CSS || Bootstrap, style the page

3) The openweathermap FUNCTION will be only be called IF a city name is given AND the user clicks the search button.
- HOW do I access or reference the **value** /name of the city the user inputs?
- HOW can I only call the function when the search button is **clicked**?
- HOW / WHAT should I do to REFERENCE the data that returns? (do I put this in a variable? do I return this at the end of the function?) ADVICE COLUMN = **KEEP IN MIND what GLOBAL vs LOCAL scoped variables do**. 

4) Once I call that data from the openweathermap website, I need to PARSE through the data/object returning and pull out just the values I need for today's forecast.
- I need to POPULATE to the CURRENT DAY page the Temperature, the wind, the humidity, the UV index, the name of the city, the current date, and the image that displays the weather. 
- For the single day call, I BELIEVE it should be an object. 
- HOW do I grab values from the returning object, **create** and element, **add text** to that element, and **append** to the page?

5) So currently I have the TODAY forecast, however I do not have the next 5-day forecast. What should I do?
- Does the SPECIFIC openweathermap api return the 5 day forecast OR does it return the current day forecast?
- If it does NOT return the 5 day forecast, I need to read the documentation. 
- IF the 5 day forecast call gives me back the data, I am GOING TO GUESS it will be **an ARRAY of OBJECTS**
- What did I learn that allows me to **ITERATE** through an array and **create**, **add text**, and **append** elements to the page?
- And then, I need to populate these cadrs to the 5-day forecast div that I made.

6) I need to find a way to have the user's previous searches PERSIST on the page. 
- Is there a way to store MULTIPLE user searches in a single reference? (hint: it might start with the letter A)
- I need to find a way to have this data **PERSIST**. Maybe some kind of **STORAGE**?
- If we have this data in the **STORAGE**, maybe we can **SET** the **ITEMS** as a KEY-VALUE, and then **GET** the **ITEMS** when the page loads. 
- Since the previous searches need to immediately populate on the screen, I need to GET these items when the page loads. 
- IF I can store these values, I need to find a way to **TARGET** the specific city that I click on to MAKE the API call again. (ADVICE COLUMN = Did we learn anything that allows an HTML element to STORE VALUES?)

