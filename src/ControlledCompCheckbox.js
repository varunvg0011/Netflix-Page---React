import './App.css';
import React from 'react';



class ControlledCompCheckbox extends React.Component{
    constructor(){
        super()
        this.state={           
            vegetables:[],
            
        }
    }


    //what is target here?
    handleChange=(e)=>{
        let temp=this.state.vegetables
        if(e.target.checked){
            temp.push(e.target.value)
            this.setState({vegetables: temp})
        }
        else{
            let i=temp.findIndex(ele=>ele==e.target.value)
            temp.splice(i,1)
            this.setState({vegetables:temp})
        }
        
    }

    render(){
        return <div>
            <input value="cucumber" type="checkbox"  onChange={this.handleChange}/>Cucumber
            <input value="tomato" type="checkbox" onChange={this.handleChange}/>Tomato
            <br />
            {this.state.vegetables.join(",")}
        </div>
    }
}

export default ControlledCompCheckbox
