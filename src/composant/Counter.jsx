import { Component} from "react";
import Valeur from "./valeur";
class Counter extends Component{
    constructor(props){
        super(props)
this.state={counter:0};
    }
imcrementer=()=>{
this.setState({counter:this.state.counter+2})
}
Desincrementer=()=>{
    this.setState({counter:this.state.counter-2})
}
inicialise=()=>{
    this.setState({counter:0})
}
UpdatePasIncrement=(val)=>{
     this.setState({counter:this.state.counter+val})
}
UpdatePasDesincrement=(val)=>{
     this.setState({counter:this.state.counter-val})
}
    render(){
    const buttonStyle = {
      color: "white",
      backgroundColor: "darkblue",
      width: "120px",
      height: "35px",
      margin: "5px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
      transition: "0.3s",
    };
    return (
        <div style={{ textAlign: "center"}} >
            <Valeur counter={this.state.counter}/>
            <button style={buttonStyle} onClick={this.imcrementer}>Incrementer</button>
            <button style={buttonStyle} onClick={this.Desincrementer}>Desincrementer</button>
            <button style={buttonStyle} onClick={this.inicialise}>Initialiser</button>
            <fieldset ><legend>Pas d'incrementation</legend>
            <button style={buttonStyle} onClick={()=> this.UpdatePasIncrement(1)}>1</button>
            <button style={buttonStyle}  onClick={()=> this.UpdatePasIncrement(2)}>2</button>
            <button style={buttonStyle}  onClick={()=> this.UpdatePasIncrement(3)}>3</button>
            <button style={buttonStyle}  onClick={()=> this.UpdatePasIncrement(4)}>4</button>
            </fieldset><br />
            <fieldset ><legend>Pas de decrementation</legend>
             <button style={buttonStyle}  onClick={()=> this.UpdatePasDesincrement(1)}>1</button>
            <button style={buttonStyle}  onClick={()=> this.UpdatePasDesincrement(2)}>2</button>
            <button style={buttonStyle}  onClick={()=> this.UpdatePasDesincrement(3)}>3</button>
            <button style={buttonStyle}  onClick={()=> this.UpdatePasDesincrement(4)}>4</button>
            </fieldset>
        </div>
    )
}
}


export default Counter;
                                                                                                      