import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export default function usePokemonInfo(id) {
    const [ gen, setGen ] = useState('')






    const fetchPokemonInfo = useCallback ( async (idOrName) => {
        if(!idOrName) return

        try{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${encodeURIComponent(idOrName)}`)
            setGen(res.data.generation.name)
            console.log(res.data.generation.name)
        
        }   catch(error) {
                if(error.name !== "AbortError") 
                    setGen('')
        }

    }, [])

    useEffect(() => {
        if(id) fetchPokemonInfo(id)
    }, [id, fetchPokemonInfo])

    return{gen, fetchPokemonInfo}
}