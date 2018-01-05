import React, { Component } from 'react';
import IBM from './ibm.png';
import face from './face.png'
import twitter from './twitter.png'
import link from './link.png'
import './App.css';

class App extends Component {
  activa(){

    console.log("Evento escuchado");  //Aquí solo despliega el mensaje en la consola de eventos
  }                                   //Aquí es donde pueden ir trabajando sobre el envio de info
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div align="left"><img width="100" height="50" src={IBM}  alt="logo"  /></div>
          <h1 className="App-title"></h1>
          <div className="link">
          <div align="center"><button onClick={this.activa}>
              Activate Lasers
            </button>
          </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>   
            <div align="left"><img width="30" height="30" src={face}  alt=""/>
            <a  href="https://www.google.com.mx/">Facebook</a></div>{"\n"}
            <div align="left"><img width="30" height="30" src={twitter}  alt=""/>
            <a  href="https://es-la.facebook.com/">Twitter</a></div>{"\n"}
            <div align="left"><img width="30" height="30" src={link}  alt=""/>
            <a  href="https://www.apple.com/mx/">LinkedIn</a></div>
            
          </div>
        </header>
        
      </div>
    );
  }
}

export default App;
