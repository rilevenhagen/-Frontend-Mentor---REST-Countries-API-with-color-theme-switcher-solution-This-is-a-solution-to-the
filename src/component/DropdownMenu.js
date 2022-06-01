import React from 'react';




function DropdownMenu(){

return(

    <select className="drop">
    <option selected value="filter">Filter by region</option>      
    <option value="africa">Africa</option>
    <option value="america">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
    <option className='clean-filter' value="clean-filter">Clean Filter</option>
</select>
    
)

}

export default DropdownMenu