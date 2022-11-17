import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import React, {useState, useEffect} from 'react';
import axios from 'axios';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((res) => {
      setCountries(res.data.sort((a, b) => a.name.common.localeCompare(b.name.common)))
      })
      .catch((err) => console.log(err));
  }, []);
   
  /* const getFormAPI = async () => {
    try {
     const response = await axios.get('https://ih-countries-api.herokuapp.com/countries.')
    
    }
    catch (error) {
      console.log(error);}

  } */


  return (
    <div className="App">
      < Navbar />
      <CountriesList countries={countries}/>

    </div>
  );
}

export default App;
