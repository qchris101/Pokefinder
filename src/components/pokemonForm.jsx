import { useCallback, useState } from "react"
// import usePokemon from "../hooks/usePokemonApi"
import PokemonCard from "./pokemonCard"



// This owns the input state
export default function PokemonForm({onSearch}) {
    const [ input, setInput ] = useState("")
    

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        if(input){
            onSearch(input.toLowerCase())
            }
        } , [input,onSearch])
    
        
    return(
        <> 
          <form
                onSubmit={handleSubmit}>
                    <input
                    type="text"
                    value={input}
                    placeholder="Input Number"
                    onChange={ (e) => setInput(e.target.value)}
                    >
                    
                    </input>
                    
                    <button
                    type="submit"
                    className="btn"
                    >Search Pokemon</button>
            </form>
  
            </>

        
    )

    
}