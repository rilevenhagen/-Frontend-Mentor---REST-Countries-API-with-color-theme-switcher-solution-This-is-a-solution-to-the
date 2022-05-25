import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
//get data from api


function Api() {

const [flag, setFlag] = useState([]);
// const [userImput, setuserImput] = useState([]);
// const [searchFlag, searchFlag] = useState([]);


const url = `https://restcountries.com/v2/all`;

axios({
    method: 'GET',
    url: url,
    }.then((response) =>{
        return console.log(response);
        // setFlag(response.data);
    }).catch(function (error){
        console.log(error)
    })
)

console.log(url);

}


export default Api