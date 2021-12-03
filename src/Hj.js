import React from 'react';
class Hj extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: ''
        };

        this.up = this.up.bind(this);
        this.clear = this.clear.bind(this);

    }

    up(e){
        this.setState  ({data: e.target.value}); 
    }

    clear(){
        this.setState  ({data: ''});
    }
    render(){
        return(
            <div>
                <input value={this.state.data} onChange={this.up}></input>
                <button onClick={this.clear}>Clear</button>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
}
export default Hj;