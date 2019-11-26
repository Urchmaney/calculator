import React from 'react';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logics/calculate';

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: 700,
  margin: 'auto',
  paddingTop: 20,
};

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  clear(){
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }
  
  handleClick(buttonName) {
    if(this.isEqualTo(buttonName)){
      this.setState(calculate(this.state,buttonName));
    }
    else if(this.isClear(buttonName)){
      this.clear();
    }
    else if(!this.state.operation && !this.isOperation(buttonName)){
      this.setTotal(buttonName);
    }
    else if(this.isOperation(buttonName) && this.state.total && !this.state.operation){
      this.setOperation(buttonName);
    }
    else if(!this.isOperation(buttonName) && this.state.operation){
      this.setNext(buttonName);
    }
  }

  setTotal(total){
    this.setState({
      total: this.state.total ? this.state.total + total : total,
      next: null,
      operation: null,
    });
  }

  setOperation(operation){
    this.setState({
      total: this.state.total,
      operation: operation,
      next: null,
    });
  }

  setNext(next){
    this.setState({
      total: this.state.total,
      operation: this.state.operation,
      next: this.state.next ? this.state.next + next : next,
    });
  }

  isOperation(op) {
    return ['+','-','/','X','%','+/-'].includes(op);
  }

  isEqualTo(op) {
    return op === '=';
  }

  isClear(op){
    return op === 'AC';
  }

  render() {
    let expression = '';
    expression += this.state.total || '0';
    expression += this.state.operation || '';
    expression += this.state.next || '';
    return (
      <div style={appStyle}>
        <Display result={expression}/>
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}

