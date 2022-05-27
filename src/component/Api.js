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
console.log(flag)
    // flag.map(props => {
    //     const name = props.name
return (
    <div>
        {
            flag.map(flag => <p key={flag.name}>{flag.name} {flag.population}</p>) }

    </div>
)}

export default Api