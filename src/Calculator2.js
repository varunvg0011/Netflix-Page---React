


import './App.css';
import Button from '@mui/material/Button';
import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Calculator2 extends React.Component{
   constructor(){
    super()
      this.state={
        expression:""
      }
    
  } 

  CalculateExpression=(e)=>{
    let number = e   
    this.setState({expression: this.state.expression + number})
  }
  
  EvaluateExpression=()=>{
     this.setState({expression:eval(this.state.expression)})
  }
  

  ResetExpression=(e)=>{
    this.setState({expression:""})
  }
  

  render(){
    return <div>
      <div>
      <Grid container spacing={.5}>
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>          
            <TextField value={this.state.expression} id="outlined-basic" placeholder="Expression" variant="outlined" disabled readonly/>         
        </Grid>
      </Grid>
        
      </div>               
        <Grid container spacing={1}>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5} >           
              <Button onClick={()=>this.CalculateExpression("1")} value="1" variant="contained">1</Button>                             
          </Grid>

          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5} >            
              <Button onClick={this.CalculateExpression} value="4" variant="contained">4</Button>                     
          </Grid>

          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>           
              <Button onClick={this.CalculateExpression} value="7" variant="contained">7</Button>                       
          </Grid>

          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>            
              <Button onClick={this.ResetExpression} value="R" variant="contained">R</Button>                      
          </Grid>          
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="2" variant="contained">2</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="5" variant="contained">5</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="8" variant="contained">8</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="0" variant="contained">0</Button>
          </Grid>
        </Grid>
          
        
        <Grid container spacing={1}>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="3" variant="contained">3</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="6" variant="contained">6</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="9" variant="contained">9</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.EvaluateExpression} value="=" variant="contained">=</Button>
          </Grid>
        </Grid>
          
        

        <Grid container spacing={1}>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="+" variant="contained">+</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="-" variant="contained">-</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="*" variant="contained">*</Button>
          </Grid>
          <Grid item xs={3} sm={1} lg={.6} md={1} xl={.5}>
            <Button onClick={this.CalculateExpression} value="/" variant="contained">/</Button>
          </Grid>
        </Grid>
          
          
        
        
    </div>
  }
}


export default Calculator2;