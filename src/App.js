import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'


export default function App() {


  const [ queryResult, setQueryResult ] = useState('')
  console.log(queryResult)

  return (
    <div className="App">
      <h1>Weather APP</h1>
      <SearchBar setQueryResult={setQueryResult} />
    </div>
  );
}


