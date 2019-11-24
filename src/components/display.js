import React from 'react';
import PropTypes from 'prop-types';

const displayStyle = {
  backgroundColor: 'gray',
  display: 'flex',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  padding: 10,
  align: 'right'
}

const Display = (props) => {
  const { result } = props;
  return (
    <div style={ displayStyle }>{ result }</div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
