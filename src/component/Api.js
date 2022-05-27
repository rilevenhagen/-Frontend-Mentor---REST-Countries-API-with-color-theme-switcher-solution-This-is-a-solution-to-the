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
// console.log(flag)
    // flag.map(props => {
    //     const name = props.name

//     const country = flag.map(flag => <p key={flag.key}>Country: {flag.name}</p>); 
//     const population = flag.map(flag =>  <p key={flag.key}>Population: {flag.population}</p>);
//     const region =  flag.map(flag => <p key={flag.key}>Region: {flag.region}</p>);
//     const capital = flag.map(flag => <p key={flag.key}>Capital: {flag.capital}</p>);
// console.log(country, population, region, capital)
return (
    flag.map(flag => {
return (
    <div>
        <div className='wrapper box'>
            <div className='container'>
                <img key={flag.alpha3Code} src={flag.flag}/>
            </div>
            <div>
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