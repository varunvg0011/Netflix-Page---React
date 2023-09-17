import React from "react";

class ChildComponent extends React.Component{

    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        return <div>
            This is Child component. Data transfered is "{this.props.prop.data}"
            <br/>
            My name is {this.props.prop.name}
        </div>
    }
}

export default ChildComponent