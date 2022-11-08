import React from "react";
import axios from 'axios'
import { useState } from "react";
const URL = "https://pokeapi.co/api/v2/pokemon/"

const PokeDisplay= ()=>{
    const [pokemons, setPokemons]=useState([])
    const axiosAllPokemons=()=>{
        axios.get(URL)
        .then((response)=>{
            console.log(response.data.results)
            setPokemons(response.data.results)
        })
        .catch(error=>console.log(error, "<=== Error ===>"))
    }
    return(
        <div>
            <center>
                <button onClick={axiosAllPokemons}> PokeFetch Button! </button>
                
                <table>
                    <th>Poke Name</th>
                        {pokemons.map((pokemon,index)=>{
                            return <tr key={index}>
                                <li>{pokemon.name}</li>
                                <td>{pokemon.url}</td>
                            </tr>
                        })
                        }
                </table>
            </center>
        </div>
    )
}
export default PokeDisplay