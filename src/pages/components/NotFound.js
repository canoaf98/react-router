import React, { PureComponent } from 'react';
import './Header';

class NotFound extends PureComponent{

  hanldeBackClick = () =>{
    this.props.history.goBack();
  }
  hanldeForwardClick = () => {
    this.props.history.goForward();
  }
  hanldeRandomClick = () => {
    const random = Math.round(Math.random() * (10 - 1) + 1); // Número aleatorio entero entre 1 y 10
    this.props.history.push(`/videos?id=${random}`, { id: random});
  }
  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button 
          className="Button"
          onClick={this.hanldeForwardClick}
        >
          Ir a la siguiente ruta
        </button>
        <button 
          className="Button"
          onClick={this.hanldeBackClick}
        >
          Ir a la ruta anterior
        </button>
        <button 
          className="Button"
          onClick={this.hanldeRandomClick}
        >
          Video Random
        </button>
      </div>
    )
  }
}

export default NotFound;