import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function usePokemonInfo(id) {
    const [ gen, setGen ] = useState('')
    const [ type, setType ] = useState('')
    const [ nextEvo, setNextEvo ] = useState('')
    const [ nextEvoSprite, setNextEvoSprite ] = useState('')






    const fetchPokemonInfo = useCallback ( async (idOrName) => {
        if(!idOrName) return

        try{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${encodeURIComponent(idOrName)}`)
            setGen(res.data.generation.name)
            
            console.log(res.data.generation.name)

            // We need to pass the the evo_chain url because this is tied to the pokemon that is searched
            // pokemon Id != evolution-chain Id!!!

            const evoUrl = res.data.evolution_chain.url
            const evoRes = await axios.get(evoUrl)
            const checkArr = evoRes.data.chain.evolves_to
            if (checkArr.length > 0){
                
                // console.log(evoRes.data.chain)
                // Increment in if statement is simple solution for testing
                idOrName++
                const evoChainRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(idOrName)}`)
                // Multiple Types Problem
                setType(evoChainRes.data.types[0].type.name)
                console.log(evoChainRes.data.types[0].type.name)
                // PlaceHolder Sprites
                console.log(evoChainRes.data.sprites.front_default)
                // console.log(idOrName)
                // Need to refactor logic
                setNextEvo(evoChainRes.data.name + " state not changing")
                setNextEvoSprite(evoChainRes.data.sprites.front_default)
            }
        
        }   catch(error) {
                if(error.name !== "AbortError") 
                    setGen('')
        }

    }, [])

    useEffect(() => {
        if(id) fetchPokemonInfo(id)
    }, [id, fetchPokemonInfo])

    return{gen, nextEvo,type,nextEvoSprite, fetchPokemonInfo}
}