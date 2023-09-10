import './App.css';
import React from 'react';
import { useState } from "react";


class ContolledComponentForm extends React.Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName:"",
            fullName:"",
            selection:"",
            gender:"",
            vegetables: []
        }

        
    }

    handleChange1=(e)=>{
        this.setState({firstName:e.target.value})
    }

    handleChange2=(e)=>{
        this.setState({lastName:e.target.value})
    }

    DisplayName=()=>{
        this.setState({fullName:this.state.firstName+ " " +this.state.lastName + " " +this.state.selection + " " + this.state.gender})
    }

    handleChange3=(e)=>{
        this.setState({selection:e.target.value})
    }

    handleChange4=(e)=>{
        this.setState({gender:e.target.value})
    }

    handleChange5=(e)=>{
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
            <input type="text" value={this.state.firstName} onChange={this.handleChange1} />
            <input type="text" value={this.state.lastName} onChange={this.handleChange2} />

            
            {/* dropdown */}
            <select value={this.state.selection} onChange={this.handleChange3}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>

            {/* radio button */}
            <label>
                {/*This checked property here returns value in boolean. so if its checked in either case, it will set gender value */}
                <input type="radio" value="male" checked={this.state.gender==="male"} onChange={this.handleChange4} />
                <span>Male</span>
            </label>
            <label>
                <input type="radio" value="female" checked={this.state.gender==="female"} onChange={this.handleChange4} />
                <span>Female</span>
            </label>



            {/*checkBox*/}
            <input value="cucumber" type="checkbox"  onChange={this.handleChange5}/>Cucumber
            <input value="tomato" type="checkbox" onChange={this.handleChange5}/>Tomato
            <br />
            

            <button onClick={this.DisplayName} >Submit</button>

            <div>
                {this.state.fullName}
                {this.state.vegetables.join(",")} 

                
                <br />
            </div>
        </div>
    }
}

export default ContolledComponentForm