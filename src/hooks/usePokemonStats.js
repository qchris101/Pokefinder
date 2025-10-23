import { useState, useEffect, useCallback } from "react";
import axios from "axios"

export default function usePokemonStats(id) {

    const [ stats, setStats ] = useState( {

        hp: null,
        attack: null,
        defense: null,
        specAttack: null,
        specDef: null,
        spd: null


    })
    // const [ att, setAtt ] = useState('')
    // const [ def, setDef ] = useState('')
    // const [ specAtt, setSpecAtt ] = useState('')
    // const [ specDef, setSpecDef ] = useState('')
    // const [ spd, setSpd ] = useState('')
    // use reduce()
    // look up how it works
    // for each to map over array amd then assign it from our object above.
    
    const fetchPokemonStats = useCallback ( async (idOrName) => {
        if(!idOrName) return
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idOrName}/`)
            // console.log(res.data.stats[0].stat.name)
            // console.log(res.data.stats[0].base_stat)
            // setStats.hp = (res.data.stats[0].base_stat)

            setStats( s => ({ ...s, 
                hp: res.data.stats[0].base_stat, 
                attack: res.data.stats[1].base_stat,
                defense: res.data.stats[2].base_stat,
                specAttack:res.data.stats[3].base_stat,
                specDef: res.data.stats[4].base_stat,
                spd: res.data.stats[5].base_stat
            
            }))
            // console.log(setStats.hp)
            

        }
        catch(error){
            if(error.name !== "AbortError")
                setStats('')

        }
    }, [setStats])

    useEffect(() => {
        if(id) fetchPokemonStats(id)
    }, [id, fetchPokemonStats])

    return{ stats, fetchPokemonStats}
}