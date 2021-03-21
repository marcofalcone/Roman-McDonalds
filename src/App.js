import React, { useState, useEffect } from 'react';
import haversine from 'haversine' // haversine formula for distance calculation
import './App.css'

import Searchbox from './components/Searchbox'
import Map from './components/Map'

import { stores } from "./components/Stores"

const App = () => {

  const[search, setSearch] = useState({})

  const [pings, setPings] = useState([])
  const [yourPing, setYourPing] = useState([])
  const [info, setInfo] = useState()

  const [center, setCenter] = useState({}) // map center
  const [zoom, setZoom] = useState() //map zoom

  const [alert, setAlert] = useState() //message alert

  const getCoordinates = async () => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${search.address},Rome&key={api-key}`

    const response = await fetch(url);
    const data = await response.json();

      if (data.status === "OK") {
        const you =({ //your position
          latitude : data.results[0].geometry.location.lat,
          longitude : data.results[0].geometry.location.lng
        })
        const near = []
        stores.forEach((store, index) => { // iterate all the stores and calculate the distance between user position and each store using haversine formula, if the distance is less or equal to the radius given push the store into the near list
          const distance = haversine(you, store).toFixed(1)
          if (distance <= search.radius)
          near.push(store)
        })
        setYourPing(you)
        setCenter({
          lat : you.latitude,
          lng : you.longitude
        })
        setZoom(13)
        setPings(near)
        if (near.length === 0) { // show message if no store in the radius given was found
          setAlert("Sorry, no McDonald's found")
        } else setAlert("")
      } else {
        alert('sorry, wrong address')
      }
  }

  const handleSearch = (e) => { // on form subsmission
    e.preventDefault()
    getCoordinates();
  }

  const set_defaultPing = () => {  // show all stores on page load
    const defaultPing = []
    stores.forEach((store, index) => {
      defaultPing.push(store)
    })
    setPings(defaultPing);
  }

  useEffect(() => {
    set_defaultPing();
    setCenter({
      lat: 41.9028,
      lng: 12.4964
    });
    setZoom(12)
  }, []);

  return (
    <>
      <div className="main">
        <Searchbox handleSearch={handleSearch} search={search} setSearch={setSearch} alert={alert} />
        <Map info={info} setInfo={setInfo} zoom={zoom} center={center} pings={pings} yourPing={yourPing} address={search.address} radius={search.radius} />
      </div>
    </>
  )
}

export default App
