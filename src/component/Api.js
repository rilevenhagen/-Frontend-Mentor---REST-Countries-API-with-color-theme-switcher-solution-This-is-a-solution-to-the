import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import DropdownMenu from './DropdownMenu';
// import Select from 'react-select'

//get data from api================


const apiURL = `https://restcountries.com/v2/`;

function Api() {

const [flag, setFlag] = useState([]);

useState(() => {
    let url = ``
    
        if( apiURL === null || apiURL === undefined || apiURL === ""){
            url = `${apiURL}all`
        } else url = `${apiURL}all`
        axios.get(url).then((response) => {
        setFlag(response.data);
    }).catch(function (error){
        console.error(error);
    });
},[flag])
console.log(flag)

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