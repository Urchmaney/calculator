import React from 'react';
import Button from './button';
export default class ButtonPanel extends React.Component{
  renderButton(name){
    return (<Button name={ name } />);
  }

  render(){
    return (
      <div>
        <div>
          { this.renderButton('%') }
          { this.renderButton('+/-') }
          { this.renderButton('AC') }
          { this.renderButton('/') }
        </div>
        <div>
          { this.renderButton('7') }
          { this.renderButton('8') }
          { this.renderButton('9') }
          { this.renderButton('X') }
        </div>
        <div>
          { this.renderButton('4') }
          { this.renderButton('5') }
          { this.renderButton('6') }
          { this.renderButton('-') }
        </div>
        <div>
          { this.renderButton('0') }
          { this.renderButton('.') }
          { this.renderButton('=') }
        </div>
      </div>
    );
  }
}
