import React, { Component } from "react";
class SetState extends React.Component{
    constructor(){
        super()
            this.state={
                data:1
            }
        }    
            abc(){
            this.setState({
                data:this.state.data+1
            });
            }
            ab(){
                this.setState({
                    data:this.state.data-1
                });
                }

    render() {
        return (
            <div>
                {this.state.data}
                <br />
                <button className="btn btn" onClick={()=>this.abc()}>Click Here +</button>
                <button className="btn btn" onClick={()=>this.ab()}>Click Here -</button>
            </div>
        );
    }
}
export default SetState;