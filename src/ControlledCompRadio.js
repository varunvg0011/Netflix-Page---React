import './App.css';
import React from 'react';



class ControlledCompRadio extends React.Component{
    constructor(){
        super()
        this.state={           
            gender:"",
            
        }
    }


    //what is target here?
    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({gender:e.target.value})
    }

    render(){
        return <div>
            <input value="male" type="radio" checked={this.state.gender==="male"} onChange={this.handleChange}/>Male
            <input value="female" type="radio" checked={this.state.gender==="female"} onChange={this.handleChange}/>Female
            <br />
            {this.state.gender}
        </div>
    }
}

export default ControlledCompRadio
