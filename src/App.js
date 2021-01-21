import React, { useState } from "react";
import ReactMapGL from 'react-map-gl'
import Card from "./components/card";

function App() {
  const [city,setCity]=useState('')
  const [isCard,setisCard]=useState(false)
  const [info, setInfo] = useState({
    name: "loading...",
    temp: "loading...",
    humidity: "loading...",
    desc: "loading...",
    icon: "loading..."
})
const [viewport,setViewport]=useState({
  width: "100%",
  height: "100vh",
  latitude: 19.0759899,
  longitude: 72.8773928,
  zoom: 1.3
})

const getWeather=(city)=>{
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_WEATHER}&units=metric`)
  .then(data => data.json())
  .then(results => {
      setInfo({
          name: results.name,
          temp: results.main.temp,
          humidity: results.main.humidity,
          desc: results.weather[0].description,
          icon: results.weather[0].icon,
      })
  })
  .catch(err => {
     console.log(err)
  })
  setisCard(true)
}

const handleSearch=(e)=>{
  e.preventDefault();
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.REACT_APP_API_GEO}`)
    .then(res=>res.json())
    .then(res2=>{
      setViewport({
        width: "100vw",
        height: "100vh",
        latitude: res2.results[0].geometry.lat,
        longitude: res2.results[0].geometry.lng,
        zoom: 10
      })
    })
    .catch(err=>console.log(err,"=error"))
    getWeather(city);
    setCity('')
  }

  return (
    <div className="App">
     <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        mapboxApiAccessToken={process.env.REACT_APP_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/light-v9"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <div className="shadow cardCont m-4" style={{
          marginTop:30,
          maxWidth:"30rem"
        }}>
            <h2>Search Weather</h2>
            <form action="" onSubmit={(e)=>handleSearch(e)}>
            <div className="input-group mb-3 shadow">
              <input type="text" 
              className="form-control" 
              placeholder="Search..." 
              aria-describedby="basic-addon1"
              value={city} 
              onChange={(e)=>setCity(e.target.value)}
              />
            </div>
            <button type="submit" 
            className="btn shadow" 
            >Search</button>
            </form>
        </div>
        {isCard &&<Card info={info}/>}
      </ReactMapGL>
    </div>
  );
}

export default App;
