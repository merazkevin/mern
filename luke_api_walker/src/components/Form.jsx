import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Form =()=>{
    const [inputVal, setInputVal] = useState();
    const [category, setCategory] = useState('people');
    console.log(category)
    const navigate = useNavigate()


    const submitHandler=(event)=>{
        event.preventDefault()
        category === 'people'? navigate(`/people/${inputVal}/`):navigate(`/planets/${inputVal}/`)
    }
    
    return(
        <div>
            <h1>Welcome to Luke Api Walker</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='searchInput'>Search for</label>
                <select name='searchInput' id='searchInput' onChange={(event)=>setCategory(event.target.value)}>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                </select>
                <label htmlFor=''> ID: </label>
                <input type='text' htmlFor='idInput' id ='idInput'onChange={(event)=>setInputVal(event.target.value)}/>
                <button class='btn btn-secondary'>Search</button>
            </form>
        </div>
    )
}

export default Form;