import React, {Component} from 'react';
class Setsss extends React.Component{
    constructor(){
        super();
        this.state={
            data:1
        }
    }
    abc(){
        this.setState({
            data:this.state.data+1
        });
    }
    cba(){
        this.setState({
            data:this.state.data-1
        });
    }

    render(){
        return(
            <>
            <p>{this.state.data}</p>
            <button className="btn btn" onClick={()=>this.abc()}>++</button>
            <button className="btn btn" onClick={()=>this.cba()}>--</button>
            </>
        );
    }
}
export default Setsss;