    import { useState, useEffect, useCallback } from "react"
    
    
    
    export default function usePokemon(id) {
        const [ search, setSearch ] = useState('')
        const [ name, setName ] = useState('')
        const [ imgFront, setImgFront] = useState('')
        const [ imgBack, setImgBack] = useState('')
        const [ loading, setLoading] = useState(false)
        const [ error, setError ] = useState(null) 
        
        
        
        const fetchPokemon = useCallback ( async (idOrName) => {
            if(!idOrName) return
            try{
                setLoading(true)
                setError(null)

                const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(idOrName)}`
                const res = await fetch (url)
                if(!res.ok) throw new Error(`Request Failed ${res.status} ${res.statusText}`)
                const data = await res.json()
                setSearch(data.id)
                console.log("This is from usepokemon: ", data.id)
                setName(data.name)
                setImgFront(data?.sprites.other.showdown.front_default)
                setImgBack(data?.sprites.other.showdown.back_default)
                
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