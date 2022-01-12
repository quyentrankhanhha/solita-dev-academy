## SOLITA DEV ACADEMY 2022 EXERCISE

## Description of the project

This project displays data (farm name, date, period, sensor type and location which I randomly choose to show on map) from different farms. This is the Frontend version of the project. 

The project shows the data in the table format and can be filtered data based on multiple conditions. The line charts displays the data of the farms according to the full/ a month with selected sensor data. The map shows the location of the farms and can be interacted with. For examople, when choosing a farm marker on the map, the table displays the full data of the farm, and the line graphs will displays based on the data. There is also the UI for adding data for the current farms and create data for the new farms.

## Technology
![React](https://img.shields.io/badge/ReactJs-17.0.2-blue) ![MUI](https://img.shields.io/badge/MUI-5.2.5-9cf) ![axios](https://img.shields.io/badge/axios-0.24.0-red) ![Highcharts](https://img.shields.io/badge/Highcharts-9.3.2-blueviolet) ![Leaflet](https://img.shields.io/badge/Leaflet-1.7.1-brightgreen) ![uuid](https://img.shields.io/badge/uuid-8.3.2-red)

The reasons to choose: 
- ReactJS framework: Developement efficiency- Less development time and higher quality ans specially, strong support community 
- MUI - Material UI has a icons which can be customized, grid system which I love the most because it is easy to create responsive layout, nice document and strong support community. 
- Highcharts is chosen because it has plenty of chart types, looks good in any screen resolutions or size, works well on all modern browsers such as Chrome, Mozilla, Internet Explorer, Netscape, and Safari, and is supported with custom theming.
- Leaflet with an open-source Javascript library and the easy to understand and use API is a good choice to create the map. 
- uuid to create the random id 

## Prerequisites
For this tutorial, make sure that you have npm (https://www.npmjs.com/) and Java runtime environment (version 8 or newer) (https://www.java.com/en/download/manual.jsp) installed on your computer. We will use npm to download and install the required dependencies in our application. You also need a code editor. The tutorial uses Visual Studio Code, which you can download from here. (https://code.visualstudio.com/)

## How to run the project?

To run the server for frontend project, according to the Solita's github:

- Clone the repository (https://github.com/solita/dev-academy-2022-exercise)
- Go to the folder and start the server with command

```bash
java -jar bin/exercise-server.jar
```

To start the Client side,

- Clone the repository (https://github.com/quyentrankhanhha/solita-dev-academy)
- Go to the folder, install and start with command

```bash
npm install
npm start
```

## TODO

- Need to do Unit tests
- Need to do Add user login for data manipulation
- Need to do Add user management
