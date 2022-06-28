# MyWeatha

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Table of Contents
* [General Info](#general-info)
* [Local Installation](#local-installation)
* [Responsibilities](#responsibilities)
* [Tools used](#tools-used)
* [Try it Out!](#try-it-out)


## General Info
`MyWeatha` is a full stack website that utilizes user authentication and authorization to display the weather forecast of any location seelcted by the user. The user can even set a location as their default weather forecast.

This is repository is the Client side of the website. The server side can be found [here](https://github.com/amimbs/react-weather-app-server.git).

## Local Installation
1) you will need to install the client and server repositories.
2) then you need node to install the project dependancies. 
3) Follow the steps below:
```console
$ cd your-desired-repo
$ git clone https://github.com/amimbs/react-weather-app-client.git
$ git clone https://github.com/amimbs/react-weather-app-server.git
$ cd react-weather-app-client
$ npm install
$ cd ..
$ cd react-weather-app-server
$ npm install
```
4) Next you you'll need 2 API keys from [OpenWeather](https://openweathermap.org/) to utilize in the following API calls:
    - [Current Weather Data](https://openweathermap.org/current)
    - [5 day weather forecast](https://openweathermap.org/forecast5)
4) Follow the instructions below:
    ```bash
    $ cd react-weather-app-client
    $ touch .env
    ```
5) In `.env`
```
REACT_APP_WEATHER_KEY = 'your api key'
REACT_APP_WEATHER_API_KEY = 'your api key'
```
6) from the client directory you can now run `npm start`
    - Runs the app in the development mode.\
    - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    - The page will reload when you make changes.\
    - You may also see any lint errors in the console.
```console
npm start
```
7) If you want to utilize user authentication and authorization you will need to host a server PostgreSQl server.
    - I recommend [ElephantSQL](https://www.elephantsql.com/).
8) Enter the following commands in your console once you've created a database using your desire service. (The following steps will be for 'Elephant SQL', a 'PostgreSQL' server, and `Sequelize`)
```console
$ cd react-weather-app-server
$ touch .env
```
9) In `.env`
```
DB_HOST='your database host'
DB_USER='your database user`
DB_PASSWORD='your database password'
DB_DATABASE='your database user'
```
10) From your Server directory update sequelize and run a migration
```console
cd react-weather-app-server
npx sequelize-cli init
npx sequelize-cli db:migrate
```
- This will push your download migrations from `react-weather-app-server` to your database

11) Now you can run `nodemon` from your server directory so that any changes you make to your 'server.js' will restart and run instantly.
```console
cd react-weather-app-server
nodemon server.js
```


### Project goals
- ~~Uses OpenWeather Api https://openweathermap.org/forecast5#JSON~~
- ~~Fetch Data~~
- ~~5 day forecast~~
- ~~Implement Toastify for imvalid searches~~
- ~~divide each 3 hr incremenent of a day from the api into individual day divs~~
- ~~style the cards for each 3hr increment with each parent day div~~
- ~~display the correct days of the week~~
- ~~optimize and styling~~
- ~~create a user table~~
- ~~add user registration forms~~
- ~~add user authentication~~ 
- ~~style the forms~~
- ~~user can add a city as their default forecast~~
- user can compare cities with default




