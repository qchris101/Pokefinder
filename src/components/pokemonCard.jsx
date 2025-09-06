// import { useState } from "react"
import usePokemon from "../hooks/usePokemonApi"
import usePokemonInfo from "../hooks/usePokemonInfo"

export default function PokemonCard({searchId}) {

    const {name, imgBack, imgFront,} = usePokemon(searchId)
    const {gen, nextEvo, nextEvoSprite, type} = usePokemonInfo(searchId)
    
    return (
        <div className="card flex flex-col justify-between h-full min-h-[180px] p-4 border-4 max-w-sm mx-auto">

                <div className=" p-4 mb-4 text-center">
                        <h1>{name}</h1>
                        <h3>{type}</h3>
                        <p>{gen}</p>
                        <img src={imgFront} alt="Pokemon Front"/>
                        <img src={imgBack} alt="Pokemon Back"/>
                </div>
                <div>
                    <p>{nextEvo}</p>
                    <img src={nextEvoSprite} alt="Pokemon Front"/>
                </div>
        </div>
    )
}