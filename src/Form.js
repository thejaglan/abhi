import React,{Component} from 'react';
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user: ''
        };
}
my = (event) => {
    this.setState({user: event.target.value});
}
render(){
    return(
        <form>
            <p>Hello <span> {this.state.user}</span></p>
            <h2>Enter Your Name:-</h2>
            <input type='text' onChange={this.my}>
            </input>
            <br></br>
        </form>
    );
}}
export default Form;