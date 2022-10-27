import React from 'react'

export class PersonCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:this.props.age ||0,
            clickDates:[],
            number:1
        }
    }
    render(){
        return <div class="div"> 
                    <h2>{this.props.last_name}, {this.props.first_name}</h2>
                    <ul>
                        <li>Age: {this.state.count}</li>
                        <li>Hair Color: {this.props.hair_color}</li>
                    </ul>
                    
                    {/* <=== Plus 1 Button ===> */}
                    <button onClick={()=>{
                        this.setState({count:this.state.count+ this.state.number})
                    }}
                    >Hello! you're getting old</button>

                    {/* <=== Reset Button ===> */}
                    <button onClick={()=>{
                        this.setState({count:this.state.count=0})
                    }}
                    >Reset</button>

                    {/* <=== Actual Age Button ===> */}
                    <button onClick={()=>{
                        this.setState({count:this.state.count= this.props.age})
                    }}
                    >Actual Age</button>
                </div>
        
    }
}
