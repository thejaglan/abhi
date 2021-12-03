import React from 'react';
class Pp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brand:"Mustang",
            color:"White",
            model:"1999"
        };
    }
    CC = () => {
        this.setState({color: "Red"})
    }
    render(){
        return(
            <div>
                <h1>
                    This is a {this.state.brand} and This is a {this.state.color} Color. 
                </h1>
                <button type="button" onClick={this.CC}>COLOR CHANGE</button>
            </div>
        );
    }
}
export default Pp;