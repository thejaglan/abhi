import React from 'react';
class Le extends React.Component{
    constructor(props){
        super(props);
        this.state = {fav: "Himanshu"};
    }
componentDidMount(){
    setTimeout(() =>{
        this.setState({fav: "Himanshu Jaglan"})
    },5000)
}
render(){
    return(
        <div>
            <h1>
                My FavColor is {this.state.fav}
            </h1>
        </div>
    );
}}
export default Le;