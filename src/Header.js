//header.js component
import { useEffect, useState, useRef } from 'react';
import { createContext } from "react";
import DarkLight from './component/DarkLight';


const Header = () => {

    return(
        // <ThemeContext.Provider value={{theme, setTheme}}>
        <header>
            <div className="wrapper">
                <h1>Where is the world?</h1>
            </div>
        </header>
        // </ThemeContext.Provider>
    )};
// }


export default Header