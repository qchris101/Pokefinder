// import { useState } from "react"
import usePokemon from "../hooks/usePokemonApi"

export default function PokemonCard({searchId}) {

    const {name, imgBack, imgFront} = usePokemon(searchId)
    
    return (
        <div className="card flex flex-col justify-between h-full min-h-[180px] p-4 border-4 max-w-sm mx-auto">

                <div className=" p-4 mb-4 text-center">
                        <p>{name}</p>
                        <img src={imgFront} />
                        <img src={imgBack} />
                </div>
        </div>
    )
}