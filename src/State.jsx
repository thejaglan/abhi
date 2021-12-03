import React, {Component} from 'react';

class State extends React.Component{
    constructor(props){
        super(props);

        this.State={
            Messag:"Welcome to State Message",
            Content:"This State Content",
        }
    }
    render(){
        return(<>
            <h1>{this.State.Messag}</h1>
            <h2>{this.State.Content}</h2>
        </>)
    }
}
export default State;