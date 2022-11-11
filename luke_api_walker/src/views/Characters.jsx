import { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";


const Characters = () => {
    const [character, setCharacters] = useState({});
    const { inputVal } = useParams();

    useEffect(() => {
            axios
                .get(`https://swapi.dev/api/people/${inputVal}`)
                .then((response) => {
                    console.log(response.data)
                    setCharacters(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },[]);

    return (
        <div>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Created : {character.created}</p>
            <hr />
        </div>
    )
}
export default Characters;