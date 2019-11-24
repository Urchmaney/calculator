import React from 'react';
import Button from './button';

const renderButton = (name,wide = false) => (<Button name={name} wide={wide} />);

const panelRowStyle = {
  display: 'flex',
  height: 100
}

const ButtonPanel = () => (
  <div>
    <div style = {panelRowStyle}>
      { renderButton('%') }
      { renderButton('+/-') }
      { renderButton('AC') }
      { renderButton('/') }
    </div>
    <div style = {panelRowStyle}>
      { renderButton('7') }
      { renderButton('8') }
      { renderButton('9') }
      { renderButton('X') }
    </div>
    <div style = {panelRowStyle}>
      { renderButton('4') }
      { renderButton('5') }
      { renderButton('6') }
      { renderButton('-') }
    </div>
    <div style = {panelRowStyle}>
      { renderButton('0', true) }
      { renderButton('.') }
      { renderButton('=') }
    </div>
  </div>
);

export default ButtonPanel;
