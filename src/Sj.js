import React from 'react';
class Sj extends React.Component{
    constructor(){
        super();
        this.state = {
            data : [
                {
                    a: 'First',
                    b: 12
                },
                {
                    a: 'Second',
                    b: 23
                },
                {
                    a: 'Third',
                    b: 34
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.data.map ((dd ,i) =>< Hh key ={i} data = {dd}/>)}
                </div>
            </div>
        );
    }
}
class Hh extends React.Component{
 render(){
     return(
         <div>
             <div>{this.props.data.a}</div>
             <div>{this.props.data.b}</div>
         </div>
     );
 }
}
export default Sj;