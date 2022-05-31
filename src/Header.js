//header.js component
import { useEffect, useState, useRef } from 'react';
import { createContext } from "react";
import DarkLight from './component/DarkLight';


const Header = (props) => {

    return(
        <header id={props.theme}>
            <div className="wrapper" id={props.theme}>
                <h1>Where is the world?</h1>
            </div>
            <DarkLight />
        </header>
    )};



export default Header