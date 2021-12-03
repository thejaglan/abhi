import React from 'react'
import { render } from 'react-dom/cjs/react-dom.development'
class Bbbb extends React.Component{
    constructor(props){
    super(props);
    this.state={
        data:
        [
         {   id: 1.,
            name: 'Himanshu',
            roll: '0013'
         },
         {   id: 2.,
            name: 'Pankaj',
            roll: '03'
         },

         {   id: 3.,
            name: 'Abhishek',
            roll: '05'
         }
        ]
    }
}
render(){
    return(
        <div>
            {this.state.data.map( (Qaaa, i) => <Tablerow key = {i}
             data = {Qaaa} />)}
        </div>
    );
}
}
class Tablerow extends React.Component{
    render(){
        return(
            <table>
                <tr>
                    <th>{this.props.data.id}</th>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.roll}</td>
                </tr>
            </table>
        );
    }
}
export default Bbbb;