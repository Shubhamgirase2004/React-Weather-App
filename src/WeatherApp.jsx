import { useState } from "react";
import Searchbox from "./Searchbox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
         city: "Delhi",
         feels_like: 24.84,
         temp: 25.05,
         tempMin: 25.05,
         tempMax: 25.05,
         humidity: 47,
         weather: "haze"
     });
 
    let updateInfo = (newInfo) => {
       setweatherInfo(newInfo);
    }
 
     return (
         <div className="weather-container">
             <h1>The Weather-Snap </h1>

             <Searchbox updateInfo={updateInfo}/>
             <InfoBox info={weatherInfo}/>
         </div>
     );
 }
 