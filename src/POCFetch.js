import React from "react";

class POCOfFetch extends React.Component{

    constructor(){
        super()
        this.state = {data: {}}
    }


    componentDidMount(){
        fetch("https://dummyjson.com/products/1")
        .then(res=>res.json())
        .then(nextRes=> {
            console.log(nextRes)
            this.setState({data:nextRes})
            }
        )
    }


    render(){
        return <div>
            <h2>Hello, This is POC for making API call using Fetch()</h2>
            { this.state.data.images!= undefined? 
            <>{
            this.state.data.images.map(element => {
                return <h2>{element}</h2>
            })}</>:
            <></>}
            
        </div>
    }

}

export default POCOfFetch

