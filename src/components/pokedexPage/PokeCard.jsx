import React, { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import '../../styles/pokeCard.css'
import '../../styles/color.css'

const PokeCard = ({ url }) => {

    const [pokemon, getPokemon] = useFetch()
    const navigate = useNavigate()

    useEffect(() => {
        getPokemon(url)
    }, [])

    // console.log(pokemon)
    const handleClick = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <article onClick={handleClick} className={`poke__card poke__card__${pokemon?.types[0].type.name}`}>
            <div className={pokemon?.types[0].type.name}></div>
            <figure>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
            </figure>
            <h3 className={`text__${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className="poke__types">
                {
                    pokemon?.types.map(type=>(
                        <li  key={type.type.url} className={`text__${pokemon?.types[0].type.name} slot${type.slot}`}>{type.type.name}</li>
                    ))
                }
            </ul>
            <p>Type</p>
            <hr />
            <ul className="poke__stats">
                {
                    pokemon?.stats.map(stat=>(!stat.stat.name.includes('special')&&
                    <li className={`text__${pokemon?.types[0].type.name}`} key={stat.stat.url}>{stat.stat.name} <span>{stat.base_stat}</span></li>
                    ))
                }
            </ul>
        </article>
    )
}

export default PokeCard