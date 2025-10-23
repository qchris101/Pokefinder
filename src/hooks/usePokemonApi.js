    // import { useState, useEffect, useCallback } from "react"
    import axios from "axios"
    import  {useQuery}  from "@tanstack/react-query"
    
    
    export default function usePokemon(id) {
        const {
            data:pokemon,
            isLoading,
            isError,
        } = useQuery({
            queryKey:["pokemon", id],
            queryFn: async () =>{
                console.log("Fetching Pokemon: " + id  )
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(id)}`)
                return res.data
            },
            enabled: true,
            staleTime: 1000 * 60 * 5,
        })
        console.log("useQuery result: " , {pokemon} , {isLoading}, {isError})

        return { pokemon, isLoading, isError }
    }