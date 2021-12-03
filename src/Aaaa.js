import React from 'react';
class Aaaa extends React.Component{
 constructor(props){
     super(props);
 
    this.state = {data: ''}

     this.qwq = this.qwq.bind(this);
     this.clear = this.clear.bind(this);
    }
    qwq(e){
        this.setState({data: e.target.value});
    }
    clear(){
        this.setState({data: ''});
    }

    render(){
        return(
            <div>
                <input value={this.state.data} onChange={this.qwq}></input>
                <button  onClick={this.clear}>Clear</button>
                <h1>{this.state.data}</h1>
            </div>
        );
    }
}
export default Aaaa;


