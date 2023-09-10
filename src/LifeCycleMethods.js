import React from "react";
class LifeCycleMethods extends React.Component{
    constructor()
    {
        super()  
        this.state={
            count:0
        }    
    }
    componentWillMount()
    {
        console.log("ComponentWillMount() called")
    }
    componentDidMount()
    {
        console.log("componentDidMount() called")
    }
    onClick=()=>{
        this.setState({count:this.state.count+1})
    }
    componentWillUpdate(nextProps,nextState)
    {
        console.log("componentWillUpdate() called",nextProps,nextState)
    }
    componentDidUpdate(prevProps,prevState)
    {
        console.log("componentDidUpdate() called",prevProps,prevState)
    }
    componentWillUnmount()
    {
        alert("Component unmounted!")
    }
    shouldComponentUpdate()
    {
        return false
    }
    render()
    {
        console.log("Render() called")

        return (
            <div style={{marginLeft:20}}>
            Hello
            <button onClick={this.onClick}>Click</button>
            {this.state.count}
            </div>
        )
    }
}
export default LifeCycleMethods