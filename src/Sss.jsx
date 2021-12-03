import React, { Component } from 'react';
class Sss extends React.Component{
    constructor(props){
        super(props);
            this.state={
                abc:"My name is Himanshu",
                xyz:"Himanshu"
            }
        }
        render(){
            return(
                <h1>{this.state.abc}</h1>
            );
        }
    }
export default Sss;