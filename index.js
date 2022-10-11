mapboxgl.accessToken =
  "pk.eyJ1Ijoid2FsdGVyYXlpZWdvIiwiYSI6ImNsOTN5bnB6MDFiNHgzdnBtenowazM3a2gifQ.W3YuE3GzTmNCjgZad0qsxQ";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
  console.log(position);
}
function errorLocation() {
  setupMap([13.404954, 52.520007]); //
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: center, // starting position [lng, lat]
    zoom: 11, // starting zoom
    projection: "globe", // display the map as a 3D globe
  });
  map.on("style.load", () => {
    map.setFog({}); // Set the default atmosphere style
  });

  // Add zoom and rotation controls to the map.
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  // Add geolocate control to the map.
  const direction = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(direction, "top-left");
}
