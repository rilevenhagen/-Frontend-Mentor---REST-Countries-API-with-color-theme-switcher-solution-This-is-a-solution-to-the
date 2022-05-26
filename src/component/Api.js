import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
//get data from api

const url = `https://restcountries.com/v2/all`;

function Api() {

const [flag, setFlag] = useState([]);

    // const fetchCountryData = async() => {
    //     const response = await fetch(url)
    //     const flag = await response.jason()
    //     setFlag(flag)
    //     console.log(flag)
    // }

const apiCall = axios({
    method: 'GET',
    url: url,
    }.then((response) =>{
        console.log(response.data);
    }).catch(function (error){
        console.log(error)
    })
)

useEffect(() =>{
apiCall()
}, [])

return (
    <>
    {flag.map((country) => {
        const { id } = country
        return <article key={id}>Country data</article>
    })}
    </>
)


// console.log(url);
// console.log(flag)


}


export default Api