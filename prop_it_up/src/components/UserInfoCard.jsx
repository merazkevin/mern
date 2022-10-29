import React from "react";
import { useState } from "react";

const UserInfoCard = (props)=>{
    const {oneInfoCard: InfoCard} = props;
    const [userCard, setOneUserCard]= useState(InfoCard)
    const {first_name, last_name,age,actualAge} = userCard

    return(
        <>
        <div className="div" >
            <h4>Name: {first_name} {last_name} 
            </h4>
            <p>Age: {age}</p>

            {/* actual Age */}
            <button onClick={(event)=>{
                        setOneUserCard({
                            ...userCard,
                            age:actualAge
                        })
            }}
            >Actual Age</button>

            {/* plus one age */}
            <button onClick={(event)=>{
                        setOneUserCard({
                            ...userCard,
                            age: age+1
                        })
            }}
            >Hey! YOo</button>

            {/* Reset */}
            <button onClick={(event)=>{
                        setOneUserCard({
                            ...userCard,
                            age: age-age
                        })
            }}
            >Reset</button>
        </div>
        </>
    )
}
export default UserInfoCard