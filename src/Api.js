import React from 'react';
class Api extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: 1
        }
    }
    dec(){
        this.setState({
            data: this.state.data -1
        })
    }
    inc(){
        this.setState({
            data: this.state.data +1
        })
    }
render(){
    return(
<div>
        {this.state.data}
        <br></br>
         <button type="button" onClick={() => this.dec()}>
            -
             </button>
             <br></br>

         <button type="button" onClick={() => this.inc()}>
             +
             </button>    
   </div> 
    );
}}
export default Api;