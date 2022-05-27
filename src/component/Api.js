import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
//get data from api


const url = `https://restcountries.com/v2/all`;

function Api() {

const [flag, setFlag] = useState([]);

useState(() => {
    axios.get(url).then((response) => {
        setFlag(response.data);
    }).catch(function (error){
        console.error(error);
    });
},[flag])

return (
    flag.map(flag => {
return (
    <div className='container2'>
        <div  className='data'>
            <div className='container'>
                <img key={flag.alpha3Code} src={flag.flag}/>
            </div>
            <div className='txtBox'>
                <p className='country' key={flag.alpha2Code}>{flag.name}</p>

                <p key={flag.numericCode}>Population: {flag.population}</p>

                <p key={flag.cioc}>Region: {flag.region}</p>
                <p key={flag.topLevelDomain}>Capital: {flag.capital}</p>
            </div>
        </div>
    </div>

)}
)
)

};


export default Api