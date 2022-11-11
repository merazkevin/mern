import { useEffect, useState } from "react";
import axios from 'axios'
const URL = `https://swapi.dev/api/people/`;

const Characters = (props) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios
                .get(URL)
                .then((response) => {
                    console.log(response.data.results);
                    setCharacters(response.data.results);
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }, 300);
    }, [])
    return (
        <div>
            {
                characters.map((character) => {
                    return (
                            <h1>All Characters</h1>,
                        <div >
                            <h2>{character.name}</h2>
                            <p>Height: {character.height}</p>
                            <p>Mass: {character.mass}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Skin Color: {character.skin_color}</p>
                            <p>Created : {character.created}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Characters;