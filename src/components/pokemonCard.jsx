
import { useQuery } from "@tanstack/react-query"

const randomId = Math.floor(Math.random()* 1000)
    

    
export default function GetPokemon() {


        const { isPending, error, data } = useQuery ({
            queryKey: ["pokemon", randomId],
            queryFn: () => 
                fetch (`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(randomId)}`).then((res) => res.json(),)
    })
    console.log(randomId)
    if (isPending) return "Loading..."

    if (error) return "An error has occurred: " + error.message

    return (
        <div className="flex flex-col items-center">
            <h1>{data.name}</h1>
            <div>
                <img src={data.sprites.other.showdown.front_default}/>
            </div>
            <div className="flex">

            <p>{data.stats[0].stat.name}</p>
            <p>{data.stats[0].base_stat}</p>
            </div>
        </div>
    )
}