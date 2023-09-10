
import './App.css';
import Button from '@mui/material/Button';
import React from 'react';

class DayTimeTypes extends React.Component{
  constructor(){
    super()

    this.state={
      countState:1,
      str1:"Good morning"
    }
  }


  handleCountState=()=>{
        this.setState({countState: this.state.countState+1})

        //we are adding tempState here as the setState function does not change the value of state var immediately and it takes time 
        //to change because of which our condition will go wrong as it may show the unchanged value.
        
      
        if(this.state.countState%3==0){
            this.setState({str1: "Good night"})
        }
        else if(this.state.countState%2==0){
          this.setState({str1: "Good afternoon"})
        }
        else{
            this.setState({str1:"Good morning"})
        }

        

    }

  render(){
    return <div>
      <p>Click here to increase count:</p>
      <Button onClick={this.handleCountState} variant="contained">Submit</Button>
      <div>{this.state.str1}</div>
    </div>
  }

}

export default DayTimeTypes