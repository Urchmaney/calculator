import React from 'react';
import PropTypes from 'prop-types';

const buttonStyle = (color, wide) => {
  const standard = 25;
  return {
    width: wide ? `${standard * 2}%` : `${standard}%`,
    textAlign: 'center',
    border: '1px solid gray',
    backgroundColor: color,
  };
};

const Button = (props) => {
  const { name, color, wide } = props;
  return (<button type="button" style={buttonStyle(color, wide)}>{ name }</button>);
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
