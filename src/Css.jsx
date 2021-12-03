import React from 'react';

class Css extends React.Component{
    render(){
        var mystyle={
            fontSize:"24px",
            color:"green",
            width:"auto",
            height:"auto",
        }

        var mystyl={
            fontSize:"24px",
            color:"green",
            width:"40px",
            height:"auto",
        }

        return(<div style={mystyle}>
            <h1>My name is Heading 1 in React</h1>
            <img style={mystyl} src="../logo192.png" alt="" />
        </div>);
    }
}
export default Css;