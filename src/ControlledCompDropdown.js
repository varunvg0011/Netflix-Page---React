import './App.css';
import React from 'react';



class ControlledCompDropdown extends React.Component{
    constructor(){
        super()
        this.state={           
            fruit:"",
            
        }
    }

    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({fruit:e.target.value})
    }

    render(){
        return <div>
            <select value={this.state.fruit} onChange={this.handleChange}>               
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
                <option value="">Select</option>
            </select>
            {this.state.fruit}
        </div>
    }
}

export default ControlledCompDropdown