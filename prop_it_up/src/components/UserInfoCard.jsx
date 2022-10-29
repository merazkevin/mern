import React from "react";
import { useState } from "react";

const UserInfoCard = (props)=>{
    const {oneInfoCard: InfoCard} = props;
    const [userCard, setOneUserCard]= useState(InfoCard)
    const {first_name, last_name,age} = userCard

    return(
        <>
        <div className="div" >
            <h1>Big Invertion</h1>
            <h4>Name: {first_name} {last_name} 
            </h4>
            <p>Age: {age}</p>
            <button onClick={(e)=>{
                        setOneUserCard({
                            ...userCard,
                            age: age+1
                        })
                    }}
                    >Hey! YOo</button>
        </div>
        </>
    )
}
export default UserInfoCard