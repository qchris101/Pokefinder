
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import Navbar from "./components/navbar"
import PokemonCard from "./components/pokemonCard"
import {  useState } from "react"

function App() {
  const randomId = Math.floor(Math.random()* 1000)
  const [searchId, setSearchId] = useState(randomId)
  return (
    <>
   
    {/* Were passing state up via: 
      onSearch = setSearchId which is the main state that we need to manipulate
      we pass onSearch -> navbar.jsx -> pokemonForm.jsx the state onSearch is called in pokemonForm.jsx
      which is tied to our input onSearch(input.toLowerCase) via this line we pull state up to our main app
    */}
    <Navbar
      onSearch={setSearchId} />
    
    {/* 
    Now that we passed our state up setSearchId's value is the input set in our form.jsx
    we pass searchId down to pokemonCard which then gets called in our usePokemon(searchId) hook.
    */}

    <PokemonCard 
      searchId={searchId} />
    
    </>
  )

}

export default App
