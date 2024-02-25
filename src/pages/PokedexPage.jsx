import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonName } from "../store/slices/pokemonName.slice";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/pokedexPage/PokeCard";
import SelectType from "../components/pokedexPage/SelectType";
import Cinta from "../components/Cinta";
import '../styles/pokedexPage.css'

const PokedexPage = () => {

    const [selectValue, setSelectValue] = useState('allPokemons')
    const trainerName = useSelector((store) => store.trainerName)
    const pokemonName = useSelector((store) => store.pokemonName)
    const textInput = useRef()
    const dispatch = useDispatch()
    const [pokemons, getPokemons, getPerType] = useFetch()

    useEffect(() => {
        if (selectValue == 'allPokemons') {
            const url = 'https://pokeapi.co/api/v2/pokemon?limit=30'
            getPokemons(url)
            // console.log('11111111')
        } else {
            getPerType(selectValue)
            // console.log('2222222222')
        }
        // console.log(selectValue)
    }, [selectValue])

    const handleSubmit = (event) => {
        event.preventDefault()
        // dispatch(setPokemonName())
        dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()))
        textInput.current.value = ''
    }

    const cbFilter = () => {
        if (pokemonName) {
            // return pokemons?.result.includes(pokemonName)
            return pokemons?.results.filter(element => element.name.includes(pokemonName))
        } else {
            return pokemons?.results
        }
        // element.name.includes(pokemonName)
    }
    // console.log(pokemons)

    return (
        <div className="pokedex">
            <Cinta/>
            <section className="pokedex__header">
                <h3>
                    <span>Bienvenido [{trainerName}],</span> Aqui podras encontrar tu pokemon favorito
                </h3>
                <div className="pokedex__form">
                    <form onSubmit={handleSubmit} className="pokedex__form_container">
                        <input type="text" ref={textInput} />
                        <button>Buscar</button>
                    </form>
                    <SelectType
                        setSelectValue={setSelectValue}
                    />
                </div>
            </section>
            <section className="pokedex__container">
                {
                    // pokemons?.results.map(poke => (
                    // pokemons?.results.filter(cbFilter).map(poke => (
                    cbFilter()?.map(poke => (
                        <PokeCard
                            key={poke.url}
                            url={poke.url}
                        />
                    ))
                }

            </section>
        </div>
    )
}

export default PokedexPage