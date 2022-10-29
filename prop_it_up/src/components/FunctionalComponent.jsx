
const FunctionalComponent =(props)=>{
    return (
        <div className="div"> 
                    <h2>{props.last_name}, {props.first_name}</h2>
                    <ul>
                        <li>Age: {props.age}</li>
                        <li>Hair Color: {props.hair_color}</li>
                    </ul>
                    
                    {/* <=== Plus 1 Button ===> */}
                    <button onClick={()=>{
                        props.setState({count:props.count+ props.number})
                    }}
                    >Hello! you're getting old</button>

                    {/* <=== Reset Button ===> */}
                    {/* <button onClick={()=>{
                        this.setState({count:this.state.count=0})
                    }}
                    >Reset</button> */}

                    {/* <=== Actual Age Button ===> */}
                    {/* <button onClick={()=>{
                        this.setState({count:this.state.count= this.props.age})
                    }}
                    >Actual Age</button> */}
                </div>
    )
}

export default FunctionalComponent