# Roman McDonald's - Location Finder

![ezgif com-gif-maker](https://user-images.githubusercontent.com/61291681/111979382-4d206c80-8b05-11eb-84ee-cc0f4de82c21.gif)

## How it works:
- Show on the map all the available locations on page load
- On form submission send a request to the Geocode google API to get the coordinates of the user
- Iterate all the locations and calculate the distance between each location and the user using the Haversine formula
- Show the locations whose distance is less or equal to the radius given
- Show an info window with the relative address when a marker is clicked
- Show a message if no locations were found in the given radius

## Packages used
- @react-google-maps/api for the embedded map;
- Haversine for haversine formula module;
