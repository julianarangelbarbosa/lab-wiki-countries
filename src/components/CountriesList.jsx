import React from 'react'
import { Link } from 'react-router-dom';


function CountriesList(props) {
  const { countries } = props;

  return (
    <div>

        {countries.map((eachcountry) => 
        {  return (
          <div>
          <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachcountry.alpha2Code.toLowerCase()}.png`} alt='country'/>
          <Link className="list-group-item list-group-item-action" to={`/${eachcountry.alpha3Code}`} >
          <p>{eachcountry.name.common}</p>
          </Link>
          </div>
          );
        })}

      </div>
    
  )
}

export default CountriesList