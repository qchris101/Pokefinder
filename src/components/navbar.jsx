import PokemonForm from "./pokemonForm"



export default function Navbar({onSearch}) {

    return(
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <span className="btn btn-ghost text-xl">PokeFinder</span>
  </div>
  <div className="flex gap-2">
        <PokemonForm 
        onSearch = {onSearch}
        />
  </div>  
</div>
    )
}