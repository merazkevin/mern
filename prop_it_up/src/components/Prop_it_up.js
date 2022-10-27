import React from 'react'

export class PersonCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            

        }
    }
    render(){
        return <div>
                    <h2>{this.props.last_name}, {this.props.first_name}</h2>
                    <ul>
                        <li>Age: {this.props.age}</li>
                        <li>Hair Color: {this.props.hair_color}</li>
                    </ul>
                </div>
        
    }
}
