import React, { useState } from 'react';


const UserForm = () => {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (event) => {
        event.preventDefault();
        const newUser = { first_name,last_name, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    }

    return (
        <div>
        <form onSubmit={createUser} >
            <h1>Hook Form</h1>
            {/* <===first_name ===> */}
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(event) => setfirst_name(event.target.value)} />
                {/* validation */}
                {first_name.length < 2? <p style={{color:"red"}}>Name must be at least 2 characters!</p>:null}
            </div>

            {/* <=== last_name ===> */}
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(event) => setlast_name(event.target.value)} />
                {/* validation */}
                {last_name.length < 2? <p style={{color:"red"}}>Last Name must be at least 2 characters!</p>:null}
            </div>

            {/* <=== email ===> */}
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(event) => setEmail(event.target.value)} />
                {/* validation */}
                {email.length < 2? <p style={{color:"red"}}>Last Name must be at least 2 characters!</p>:null}
            </div>

            {/* <=== password ===> */}
            <div>
                <label>Password: </label>
                <input type="text" onChange={(event) => setPassword(event.target.value)} />
                {/* validation */}
                {password.length < 2? <p style={{color:"red"}}>Last Name must be at least 2 characters!</p>:null}
            </div>

            {/* confirmPassword */}
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(event) => setConfirmPassword(event.target.value)} />
                {/* validation */}
                {confirmPassword.length < 2 ? <p style={{color:"red"}}> Must be at least 2 characters!</p>:null}
                {confirmPassword === password? <p style={{color:"red"}}>Doesnt Match Password!</p>:null}
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h3>Your Form Data</h3>
        <ul>
            <li>First Name: <b>{first_name}</b></li>
            <li>Last Name: <b>{last_name}</b></li>
            <li>Email: <b>{email}</b></li>
            <li>Password: <b>{password}</b></li>
            <li>Confrim Password: <b>{confirmPassword}</b></li>
        </ul>
        </div>
    );
};

export default UserForm;
