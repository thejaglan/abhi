import React, {Component} from 'react';
import Css from './Css';
import Head from './Head';
import SetState from './SetState';
import Sss from './Sss';
import State from './State';
import Setsss from './Setsss';

class App extends React.Component{
 constructor(props)
 {
   super(props);
   this.state={
     Message:"Welcome to my website",
     Content:"This is Body",
  
  }
 }
render() {
  
 return (
   <div>
     <Sss />
     <Head />
     <Css />
     <Setsss />
     <SetState />
     <State />
  </div>
  );  
}
}

export default App;