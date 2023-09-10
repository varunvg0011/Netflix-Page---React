//http://api.tvmaze.com/singlesearch/shows?q=narcos&embed=episodes



import React from "react";

class FormWithFetch extends React.Component{

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
        return (<div>
            <h2>Hello, This is POC for making a basic form  using Fetch()</h2>
            
            { this.state.data!= undefined? 
            <>
            { 
                <div>
                    <span>
                        <label for="id">ID:</label>
                        <input type="text" id="id" value={this.state.data.id} disabled readonly/>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <label for="title">Title:</label>
                        <input type="text" id="title"  value = {this.state.data.title} disabled readonly/>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <label for="description">Description:</label>
                        <input type="text" id="description" value = {this.state.data.description} disabled readonly/>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <label for="price">Price:</label>
                        <input type="text" id="price" value = {this.state.data.price} disabled readonly/>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <label for="discountPercentage">Discount Percentage:</label>
                        <input type="text" id="discountPercentage" value = {this.state.data.discountPercentage} disabled readonly/>
                    </span>
                    <br/>
                    <br/>
                    <span>
                        <label for="rating">Rating:</label>
                        <input type="text" id="rating" value = {this.state.data.rating} disabled readonly/>
                    </span>
                    <br/><br/>
                        <label for="images">Images:</label>
                        <br/>
                        {
                        this.state.data.images.map(element => {
                            return (<div>
                                <img src = {element}/>
                                <br/>
                                </div>
                            )
                            
                        })}
                        
                    
                </div>
            
            
            }</>
            :  <></>}
            
        </div>)
    }

}

export  default FormWithFetch