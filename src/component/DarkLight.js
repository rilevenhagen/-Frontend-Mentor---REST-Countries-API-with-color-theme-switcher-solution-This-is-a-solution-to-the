
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import useLocalStorage from 'use-local-storage';


const DarkLight = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme) 
    return console.log('🤪🤪🤪🤪🤪')
  }

    return(
        <div>
            <div>
                <i onClick={ switchTheme } class='fas fa-toggle-on'></i>
                <p>Light</p>
            </div> 
            <div className='dark-mode'>
                <p>Dark</p>
            </div>
        </div>
    )};

export default DarkLight