import React from 'react';
import PropTypes from 'prop-types';

const Button = () => {
  return (
    <button>{this.props.name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;
