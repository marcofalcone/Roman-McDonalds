# Roman McDonald's

![Desktop 2021 03 21 - 16 46 20 04_1](https://user-images.githubusercontent.com/61291681/111911736-0ed47000-8a67-11eb-9b59-b1db49ba9875.gif)

This app is part of a different project that I'm currently working on. Since this feature could be implemented in many different applications I decided to make a specific repo for the world to use. I was asked to build a location finder with an embedded map so doing some research I found this great article that helped me build exactly what I needed, - https://medium.com/launch-school/building-a-location-finder-app-powered-by-the-google-maps-javascript-api-bb6a37563de - the app provided in the article has been written in vanilla js so I wrote it from scratch using React.

## Here's how it works:
- Show on the map all the available locations on page load
- On form submission send a request to the Geocode google API to get the coordinates of the user
- Iterate all the locations and calculate the distance between each location and the user using the Haversine formula
- Show the locations whose distance is less or equal to the radius given
- Show an info window with the relative address when a marker is clicked
- Show an error message if no locations were found in the given radius\

## How to use locally
Unfortunately the google services are not free so I couldn't make a live demo of the app but you can get an API key here -> https://developers.google.com/maps/documentation/javascript/get-api-key for a free trial. When you have it download the repo and install node modules and packages
```bash
npm install
```
replace {api-key} in App.js and Map.js with your key.
CD into the repo and run
```bash
npm start
```

## Packages used
- @react-google-maps/api for the embedded map;
- Haversine for haversine formula module;

## Note
The original app wont search for McDonalds of course but I was asked to change the theme until it was officially deployed and since McDonalds has many stores all around Rome it was perfect to showcase how the app works.

####
Work by Marco Falcone
