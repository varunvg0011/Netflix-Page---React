import React from "react";

class FetchExample extends React.Component{
    constructor()
    {
        super()
    }
//fetch()
/*
async function postJSON(data) {
  try {
    const response = await fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const data = { username: "example" };
postJSON(data);
*/
    componentDidMount()
    {
        fetch("https://dummyjson.com/produc/1",{
            method:"GET"
        })
        //res.json() gives error here because our res is string type and not object type
        .then(res=> res.json())
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(<div>
            Hello World
        </div>)
    }
}

export  default FetchExample