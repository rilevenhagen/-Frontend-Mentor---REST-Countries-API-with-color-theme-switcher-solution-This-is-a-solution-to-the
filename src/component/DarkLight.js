import { useEffect, useState, useRef } from 'react';
import { createContext } from "react";
import useLocalStorage from 'use-local-storage'

export const ThemeContext = createContext(null);


const DarkLight = (props) => {

const [theme, setTheme] = useState('dark')

const toggleTheme = () => { setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
        <div>
            <div className='light-mode'>
                <p>Light</p>
            </div> 
            <div className='dark-mode'>
                <p>Dark</p>
            </div>
        </div>
        </ThemeContext.Provider>
    )};
}
export default DarkLight