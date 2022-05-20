
import './App.css';
import ButtonAppBar from './components/AppBar';
import LocationSearch from './components/LocationSearchBar';
import Day from './components/Day';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
// fetch is handled here,
//have day components? or week componenets?
// 0 - 6 is sunday through sunday




export default function App() {

  const [fiveDayForecast, setFiveDayForecast] = useState([])

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  let fetchLocation = location => {
    let uri = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=d81cd23bebaee5052dc9f2c66e971401`, requestOptions;
    fetch(uri)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        setFiveDayForecast(result.list)
      })
      .catch(error => console.log('error', error));
  };

  // use a map funciton on the fivedayforecast pass in the day forecast to a component. Compnenet should figure out the rendering
  return (
    <div className="App">
      <ButtonAppBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >

        <Grid item xs={3}>
          <LocationSearch submitLocation={fetchLocation}/>
        </Grid>

      </Grid>
      {fiveDayForecast.map((day, index) => {
        return <Day key={index} day={day} />
      })}
    </div>
  );
}

