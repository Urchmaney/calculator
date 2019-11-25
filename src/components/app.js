import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700,
  margin: 'auto',
  paddingTop: 20,
};

const App = () => (
  <div style={appStyle}>
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
