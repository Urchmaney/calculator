import React from 'react';
import { Display } from './display';
import { ButtonPanel } from './buttonPanel';

export class App extends React.Component{
  render(){
    return (
      <div>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
