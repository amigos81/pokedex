import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Cinta from "../components/Cinta";
import '../styles/pokeIdPage.css'
import '../styles/color.css';

const PokeIdPage = () => {
    const [pokeData, getPokeData] = useFetch()
    const param = useParams()
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/pokemon/${param.id}`
        getPokeData(url)
        // console.log(pokeData)
    }, [])

    return (
        <>
            <Cinta />
            <div className="pokeid">
                <article className="pokeid__container">
                    <div className={`pokeid_color ${pokeData?.types[0].type.name}`}></div>
                    <figure>
                        <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
                    </figure>

                    <h2 className={`pokeid__order text__${pokeData?.types[0].type.name}`}>#{pokeData?.order}</h2>

                    <div className="divider">
                        <div className="side"><hr /></div>
                        <div className="middle"><p className={`text__${pokeData?.types[0].type.name}`}>{pokeData?.name}</p></div>
                        <div className="side"><hr /></div>
                    </div>


                    <ul className="pokeid__weight_height">
                        <li>Peso <span>{pokeData?.weight}</span></li>
                        <li>Altura <span>{pokeData?.height}</span></li>
                    </ul>

                    <ul className="pokeid__type_ability">
                        <li>Tipos
                            <div className="pokeid__type">
                                {
                                    pokeData?.types.map(type => (
                                        <div key={type.slot} className={`${type.type.name} text__${type.type.name}`}>{type.type.name}</div>
                                    ))
                                }
                            </div>
                        </li>
                        <li> Habilidades
                            <div className="pokeid__ability">
                                {
                                    pokeData?.abilities.map(abilitie => (
                                        <div key={abilitie.slot} className={``}>{abilitie.ability.name}</div>
                                    ))
                                }
                            </div>
                        </li>
                    </ul>



                    <div className="pokeid__stats">
                        <div className="divider__right">
                            <div className="middle">Stats</div>
                            <div className="side"><hr /></div>
                        </div>
                        {
                            pokeData?.stats.map((stat, index) => (
                                <div key={index} className="stats__list">
                                    <div className="stats__name">
                                        <div>{stat.stat.name}</div>
                                        <div>{stat.base_stat} / 150</div>
                                    </div>
                                    <div className="stats__base_stat">
                                        <div style={{ width: ((stat.base_stat * 100) / 150) + '%' }} ></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </article>
                <article className="pokeid__movements">
                    <div className="divider__right">
                        <div className="middle">Movimientos</div>
                        <div className="side"><hr /></div>
                    </div>
                    <div className="movements__list">
                        {
                            pokeData?.moves.map((move, index) => (
                                <div key={index} className="movements__items">
                                    {move.move.name}
                                </div>
                            ))
                        }
                    </div>
                </article>
            </div>
        </>


    )
}

export default PokeIdPage