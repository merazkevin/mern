import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Form =()=>{
    const [category, setCategory] = useState('people');
    const [inputVal, setInputVal] = useState();
    const navigate = useNavigate()

    const submitHandler=(event)=>{
        event.preventDefault()
        category === 'People'? navigate(`/people/${inputVal}/`):navigate(`/planets/${inputVal}/`)
    }    
    return(
        <div>
            <h1>Welcome to Luke Api Walker</h1>
            <form onSubmit={submitHandler}>
                <label  class="sr-only">Search For: </label>
                <select name="" id="" onChange={(event)=>setCategory(event.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label htmlFor=""> ID: </label>
                <input type="text"  onChange={(event)=>setInputVal(event.target.value)}/>
                <button class="btn btn-secondary">Search</button>
            </form>
        </div>
    )
}

export default Form;