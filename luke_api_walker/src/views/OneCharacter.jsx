import {useParams} from "react-router-dom";

const One_character = (props)=>{
    const {id}= useParams();
    return (
        <div>
            <h2>One Character By Id: </h2>
            <p>Character:{id}</p>
        </div>
    )
}
export default One_character;