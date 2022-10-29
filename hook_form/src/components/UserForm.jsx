import React, { useState } from 'react';


const UserForm = (props) => {
    const [first_name, setfirst_name] = useState("");
    const [last_name, setlast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (event) => {
        event.preventDefault();
        const newUser = { first_name,last_name, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    return (
        <div>
        <form onSubmit={createUser} >
            <h1>Hook Form</h1>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(event) => setfirst_name(event.target.value)} />
            </div><br />
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(event) => setlast_name(event.target.value)} />
            </div><br />
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(event) => setEmail(event.target.value)} />
            </div><br />
            <div>
                <label>Password: </label>
                <input type="text" onChange={(event) => setPassword(event.target.value)} />
            </div><br />
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(event) => setConfirmPassword(event.target.value)} />
            </div><br />
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
