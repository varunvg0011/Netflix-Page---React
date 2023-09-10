import React from "react";
import ClassBasedComponent from './ClassBaedComponent'
import FunctionalComponent from "./FunctionalComponent";
class ConditionalRendering extends React.Component{
    constructor()
        {
            super()
            this.state={
                count:0
            }
        }
        handleClick=()=>{
            this.setState({count:this.state.count+1})
        }
        render()
        {
            return <div>
                <button onClick={this.handleClick}>Click Me!</button>{this.state.count}<br/>
                //this will be re-rendered
                {
                    this.state.count%2==0 ?
                    <div>
                        Hello I am classed based component
                    <ClassBasedComponent/>
                    </div>:
                    <FunctionalComponent/>
                }
               
            </div>
        }
}

//(condition)? true : false
export default ConditionalRendering