import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiRequest from './hooks/apiRequest';
import CurrentForecast from './components/CurrentForecast';
import FiveDay from './components/FiveDay';




export default function App() {


  const [queryResult, setQueryResult] = useState('Atlanta')

  const { data, loading } = apiRequest(queryResult)

  const body = Object.keys(data).length !== 0 && (
    // there has to be a wrapper here because react can only return a single url element
    <>
      <CurrentForecast data={data} />
      <h2 style={{margin: "20px 0"}}>Forecast</h2>
      <FiveDay data={data} />
    </>
  );

  const loadingDiv = <div className="loadingDiv">Loading . . .</div>

  return (
    <div className="App">
      <ToastContainer />
      <h1 style={{ margin: "30px 0px" }}>Weather APP</h1>
      <SearchBar setQueryResult={setQueryResult} />
      {loading ? loadingDiv : body}
    </div>
  );
}


