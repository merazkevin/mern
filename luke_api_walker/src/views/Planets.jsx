import React, { useEffect, useState } from "react";
import { useParams} from 'react-router-dom'
import axios from 'axios'


const Planets = () => {
    const { inputVal } = useParams();
    const [planet, setPlanet] = useState({})
    console.log(inputVal)

    useEffect(() => {
            axios
                .get(`https://swapi.dev/api/planets/${inputVal}`)
                .then((response) => {
                    console.log(response.data)
                    setPlanet(response.data)
                })
                .catch(error => console.log(error))
        }, [inputVal])
    return (
        <div >
            <h2>{planet.name}</h2>
            <p>climate: {planet.climate}</p>
            <p>terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>population: {planet.population}</p>
            <hr />
        </div>
    )
}
export default Planets;