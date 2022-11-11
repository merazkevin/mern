import { useEffect, useState } from "react";
import axios from 'axios'
const URL = `https://swapi.dev/api/planets/`;

const Planets = (props) => {
    const [planets, setPlanets] = useState([]);
    console.log(planets)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            axios
                .get(URL)
                .then((response) => {
                    console.log(response.data.results);
                    setPlanets(response.data.results);
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
                planets.map((planet) => {
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
                })
            }
        </div>
    )
}
export default Planets;