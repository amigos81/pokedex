import React, { useEffect, useRef } from "react";
import '../styles/cinta.css'

const Cinta = () => {



    return (
        <>
            <div className="cinta">
                <div className="cinta__red">
                    <img src="image/pokedex.png" alt="" />
                </div>
                <div className="cinta__black"></div>
                <div className="cinta__circle">
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default Cinta