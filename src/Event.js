import React,{Component} from 'react';
class Event extends React.Component{
  constructor(props){
      super(props);
      this.Abc = this.Abc.bind(this)
  }
    Abc(){
        alert("this is Alert");
    }
    render(){
        return(
            <button type="button" onClick={this.Abc}>Button</button>

        );
    }
    }
export default Event;