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

//     flag.map(element => {
//         console.log(element.name)
// return (
//     <h2>{element.name}fffff</h2>
// )
// }); 

}

export default Api