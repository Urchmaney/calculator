import React from 'react';
import PropTypes from 'prop-types';

const displayStyle = {
  backgroundColor: 'gray',
  display: 'flex',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  fontSize: 40,
  padding: 10,
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const Display = (props) => {
  const { result } = props;
  return (
    <p style={displayStyle}>{ result }</p>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
