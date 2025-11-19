import { Component } from "react";
class Valeur extends Component{
   render(){
   return (
    <div style={{
          color: "black",
          width: "80%",
          height: "100px",
          border: "2px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "50px",
          fontWeight: "bold",
          borderRadius: "10px",
          backgroundColor: "#f0f0f0",
          margin: "20px auto 40px auto" 
        }}>{this.props.counter}</div>
    )
   }
   }

export default Valeur