import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = (color, wide) => {
  const standard = 25;
  return {
    width: wide ? `${standard * 2}%` : `${standard}%`,
    textAlign: 'center',
    border: '1px solid white',
    backgroundColor: color,
    fontWeight: 'bold',
    fontSize: 30,
  };
};

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  handleClick(buttonName) {
    const { onClick } = this.props;
    onClick(buttonName);
  }

  buttonClicked(event) {
    this.handleClick(event.target.innerHTML);
  }

  render() {
    const { name, color, wide } = this.props;
    return (<button type="button" onClick={this.buttonClicked} style={buttonStyle(color, wide)}>{ name }</button>);
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};
