import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';


export default function Searchbox({updateInfo}) {
    let[city , setCity] = useState("");
    let[error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = process.env.REACT_APP_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let responce =await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await responce.json();
        
        let result = {
            city: city,
            temp: jsonResponce.main.temp,
            tempMin: jsonResponce.main.temp_min,
            tempMax: jsonResponce.main.temp_max,
            humidity: jsonResponce.main.humidity,
            feels_like: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description

        };
        console.log(result);
        return result;

        } catch(err) {
         throw err;
        }
        
    };

    

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err) { 
            setError(true);

        }
        
    };
    return (
        <div className='Searchbox'>
           
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="cityName" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'> Search </Button>
            {error && <p style= {{color:"red"}}>No Such Place In Our Database</p>}
            </form>
        </div>
    );
}