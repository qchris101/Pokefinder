    import { useState, useEffect, useCallback } from "react"
    import axios from "axios"
    
    
    export default function usePokemon(id) {
        const [ search, setSearch ] = useState('')
        const [ name, setName ] = useState('')
        const [ imgFront, setImgFront] = useState(null)
        const [ imgBack, setImgBack] = useState(null)
        const [ loading, setLoading] = useState(false)
        const [ error, setError ] = useState(null) 
        
        
        
        const fetchPokemon = useCallback ( async (idOrName) => {
            if(!idOrName) return
            try{
                setLoading(true)
                setError(null)

                // const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(idOrName)}`
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(idOrName)}`)
                // console.log(res.data)
                setSearch(res.data.id)
                setName(res.data.name)
                setImgFront(res.data?.sprites.other.showdown.front_default)
                setImgBack(res.data?.sprites.other.showdown.back_default)
            } catch(error) {
                if( error.name !== "AbortError") setError(error.message || "Unknown Error")
                    setName('')
                    setImgBack('')
                    setImgFront('')
            } finally {
                setLoading(false)
            }
            
            
         
        }, [])
        
        useEffect(() => {
            if(id) fetchPokemon(id)

        }, [id, fetchPokemon])

    return{ name, imgFront, imgBack, fetchPokemon, loading, error, search}
    }