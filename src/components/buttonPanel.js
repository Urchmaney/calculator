import React from 'react';
import Button from './button';

const renderButton = (name, color, wide = false) => 
  (<Button name={name} wide={wide} color={color} />);

const panelRowStyle = {
  display: 'flex',
  height: 100,
};

const bColor = '#e0e0e0';

const ButtonPanel = () => (
  <div>
    <div style={panelRowStyle}>
      { renderButton('%', bColor) }
      { renderButton('+/-', bColor) }
      { renderButton('AC', bColor) }
      { renderButton('/') }
    </div>
    <div style={panelRowStyle}>
      { renderButton('7', bColor) }
      { renderButton('8', bColor) }
      { renderButton('9', bColor) }
      { renderButton('X') }
    </div>
    <div style={panelRowStyle}>
      { renderButton('4', bColor) }
      { renderButton('5', bColor) }
      { renderButton('6', bColor) }
      { renderButton('-') }
    </div>
    <div style={panelRowStyle}>
      { renderButton('0', bColor, true) }
      { renderButton('.', bColor) }
      { renderButton('=') }
    </div>
  </div>
);

export default ButtonPanel;
