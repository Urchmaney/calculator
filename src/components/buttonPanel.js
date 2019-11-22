import React from 'react';
import Button from './button';

const renderButton = name => (<Button name={name} />);

export default class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          { renderButton('%') }
          { renderButton('+/-') }
          { renderButton('AC') }
          { renderButton('/') }
        </div>
        <div>
          { renderButton('7') }
          { renderButton('8') }
          { renderButton('9') }
          { renderButton('X') }
        </div>
        <div>
          { renderButton('4') }
          { renderButton('5') }
          { renderButton('6') }
          { renderButton('-') }
        </div>
        <div>
          { renderButton('0') }
          { renderButton('.') }
          { renderButton('=') }
        </div>
      </div>
    );
  }
}
