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

const isOperation = op => ['+', '-', '/', 'X', '%', '+/-'].includes(op);

const isEqualTo = (op) => op === '=';

const isClear = (op) => op === 'AC';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setTotal(newTotal) {
    const { total } = this.state;
    this.setState({
      total: total ? total + newTotal : newTotal,
      next: null,
      operation: null,
    });
  }

  setOperation(operation) {
    const { total } = this.state;
    this.setState({
      total,
      operation,
      next: null,
    });
  }

  setNext(newNext) {
    const { total, operation, next } = this.state;
    this.setState({
      total,
      operation,
      next: next ? next + newNext : newNext,
    });
  }

  handleClick(buttonName) {
    const { total, operation } = this.state;
    if (isEqualTo(buttonName)) {
      this.setState(prev => calculate(prev, buttonName));
    } else if (isClear(buttonName)) {
      this.clear();
    } else if (!operation && !isOperation(buttonName)) {
      this.setTotal(buttonName);
    } else if (isOperation(buttonName) && total && !operation) {
      this.setOperation(buttonName);
    } else if (!isOperation(buttonName) && operation) {
      this.setNext(buttonName);
    }
  }

  clear() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
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
