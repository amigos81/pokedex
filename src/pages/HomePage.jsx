import React, { useRef } from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/homePage.css'

const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const trainerName=useSelector((store)=>store.trainerName)

    const textInput = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        // setTrainername(textInput.current.value.trim())
        dispatch(setTrainerName(textInput.current.value.trim().toLowerCase()))
        navigate('/pokedex')
    }
    // console.log(trainerName)
    return (
        <div className="home">
            <div className="home__title">
                <img src="/image/pokedex.png" alt="" />
                {/* <h1>Pokedex</h1> */}
                <h2>¡Hola entrenador!</h2>
                <p>Para poder comenzar, dame tu nombre</p>
                <form onSubmit={handleSubmit} className="form__container">
                    <input placeholder="Tu nombre" type="text" ref={textInput} />
                    <button>Comenzar</button>
                </form>
            </div>
            <div className="footer">
                <div className="footer__red"></div>
                <div className="footer__black"></div>
                <div className="footer__circle">
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage