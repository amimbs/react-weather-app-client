
import { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { textAlign } from '@mui/system';


// fetch is handled here,

// 0 - 6 is sunday through sunday

export default function App() {

  // const [queryResults, setQueryResults] = useState = '';
  // const {data, loading} = apiHook(queryResults);


  // use a map funciton on the fivedayforecast pass in the day forecast to a component. Compnenet should figure out the rendering
  return (
    <div className="App">
      <ToastContainer />
      <h2 style={{
        margin: "30px 0px",
        textAlign: "center"
      }}
      >Weather that Waits 5 Minutes</h2>

    </div>
  );
}

