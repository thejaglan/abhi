import React from 'react';
class A extends React.Component{
    render(){return(
        <h1>
            This is A Car {this.props.BRAND}!!!!
        </h1>
    );
} }
class B extends React.Component{
    render(){
        const carname = "Ford";
        return(
            <div>
               <h1> This IS a CAR CAR Car </h1>
                <A BRAND = {carname} />
            </div>
        );
    }
}
export default B;