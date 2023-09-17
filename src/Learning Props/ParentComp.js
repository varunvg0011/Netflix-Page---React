import React from "react";
import ChildComponent from "./ChildComp";
import FuncChildComp from "./FuncChildComp";

class ParentComponent extends React.Component{

    constructor(){
        super()
        this.state={
            data:"data sent from parent",
            name:"Varun"

        }
    }
    render(){
        return <>
            <div>
                This is Parent component
            </div>
            <ChildComponent prop ={this.state}  />
            <FuncChildComp prop= {this.state}/>
            </>}
    }

export default ParentComponent