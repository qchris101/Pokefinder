# Welcome to PokeFinder! This React + Vite Project was made using the Pokeapi! [text](https://pokeapi.co/)




### 
What do I want to show with this project?
    1. I can work with multiple levels of data via an API.
    2. Show off how I can handle React States with multiple changing components 
    3. Work on my react knowledge.
    4. Practice on UI
    5. Learn better ways to increase performance.
###
What do I want this Project to do?
    1. I want to be able to see the pokemon when I search via name or number.
    2. Show basic information Generation/Number/Name/abilities/type
    3. I want to be able to see all its stats.
    4. Be able to Favorite a Pokemon.
    5. Show my history of search's ?(Maybe)
    6. Show the evolution line if it has one on search.(via bottom left/right corner.)
    7. List all pokemon but only make calls on scroll for rendering to not overload server calls("Performance based challenge")
   

###
List of current issues
    1. When searching type text doesn't match the third Evolution. (Ie Venusaur -> type shows fire, Charizard -> type shows water.)
    2. If pokemon has multiple types only 1 is being shown.
    3. State doesn't change properly (name & sprite img) if the next pokemon doesn't have an evolution. (Ie Articuno will stay on the UI when incrementing through the next 2 pokemon.)

###
Current Challenges:
    1. When adding Stats endpoint is an array need to map through array to easily add information.
    2. Same logic applies if more than 1 type.
    3. How to spilt hooks based on what im calling.
    4. Possibly adding React Query to handle calls/caching.

