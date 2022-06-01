import React from 'react';

function Search() {


function handleOnChange (event) {
    event.preventDefault()
    const  input = event.target.value
    console.log(input)
    return input 
}

    return(
<div className="wrapper form-box">
    <form action="">
        <input type="text" onChange={handleOnChange} placeholder="&#x1F50D; Search for country..."/>
    </form>
</div>

    )

} 







export default Search