import React from 'react';
import av from './av.png';
class Navbar extends React.Component{
    render(){
        return(
            <div class="nav">
                <nav>
                    <a class="Atag" href="#">Home</a>
                    <a class="Atag" href="#">Contact</a>
                    <a class="Atag" href="#">About</a>
                    <button type="button" class="btn-primary outline-secounary" href="#">BUTTON</button>
                    <br></br>
                    <marquee scrollamount="25">THIS IS A NAVBAR AND THIS IS A PICTURE</marquee>
                </nav>
                <img src={av} width="100%" height="50%"/>
            </div>
        );
    }
}
export default Navbar;