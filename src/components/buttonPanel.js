import React from 'react';
import Button from './button';

const renderButton = (onclick, name, color, wide = false) => (
  <Button name={name} wide={wide} color={color} onClick={onclick} />
);

const panelRowStyle = {
  display: 'flex',
  height: 100,
};

const bColor = '#e0e0e0';

export default class ButtonPanel extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.props.onClick(buttonName);
  }

  render() {
    return (
      <div>
        <div style={panelRowStyle}>
          { renderButton(this.handleClick, '%', bColor) }
          { renderButton(this.handleClick, '+/-', bColor) }
          { renderButton(this.handleClick, 'AC', bColor) }
          { renderButton(this.handleClick, '/') }
        </div>
        <div style={panelRowStyle}>
          { renderButton(this.handleClick, '7', bColor) }
          { renderButton(this.handleClick, '8', bColor) }
          { renderButton(this.handleClick, '9', bColor) }
          { renderButton(this.handleClick, 'X') }
        </div>
        <div style={panelRowStyle}>
          { renderButton(this.handleClick, '4', bColor) }
          { renderButton(this.handleClick, '5', bColor) }
          { renderButton(this.handleClick, '6', bColor) }
          { renderButton(this.handleClick, '-') }
        </div>
        <div style={panelRowStyle}>
          { renderButton(this.handleClick, '1', bColor) }
          { renderButton(this.handleClick, '2', bColor) }
          { renderButton(this.handleClick, '3', bColor) }
          { renderButton(this.handleClick, '+') }
        </div>
        <div style={panelRowStyle}>
          { renderButton(this.handleClick, '0', bColor, true) }
          { renderButton(this.handleClick, '.', bColor) }
          { renderButton(this.handleClick, '=') }
        </div>
      </div>
    );
  }
}
