import { latLng } from "leaflet"

const tilesProvider = 'https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([5.337, -72.395], 13)

L.tileLayer(tilesProvider, {
    maxZoom: 18
}).addTo(myMap)

let marker = L.marker([5.337, -72.395]).addTo(myMap)

let iconMarker = L.icon ({
iconUrl: 'marker.png', 
iconSize: [60,60],
iconAnchor: [30,60]
})

let marker2 = L.marker([5.33,-72.39],{ icon: iconMarker}).addTo(myMap)

myMap.doubleClickZoom.disable()
myMap.on('dblclick', e = {
  let latLng = myMap.mouseEventToLatLng(e.originalEvent)
  L.marker([latLng.lat, latLng.lng], {icon: iconMarker}).addTo(myMap)
})

navigator.geolocation.getCurrentPosition()
  (pos) = {
    const = { coords } = pos
    console.log(coords)
    L.marker([coords.latitude, coords.longitude], { icon: iconMarker}).addTo(myMap)
  },
  (err) = {
    console.log(err)
  },
  {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }