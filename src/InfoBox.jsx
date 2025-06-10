import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";


export default function InfoBox({info}) {
    const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL ="https://wallpaperaccess.com/full/2942814.jpg";
    const HOT_URL ="https://tse2.mm.bing.net/th?id=OIP.EZoRVQeDayQv7pnfqlV8dgHaEK&pid=Api&P=0&h=180";
    const RAIN_URL ="https://wallpaperaccess.com/full/164284.jpg";

    return (
        <div className="InfoBox">
           
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345, backgroundColor: "rgba(111, 163, 191, 0.5)", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",borderRadius:"10px" }}>

      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL 
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span" }>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The Weather can be descibed as <strong>{info.weather}</strong> and Feels like {info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
        </div>
    );
}