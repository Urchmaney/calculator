const Big = require('big.js');

const operations = {
  '+': (numberOne, numberTwo) => Number(Big(numberOne)) + Number(Big(numberTwo)),
  '-': (numberOne, numberTwo) => Big(Number(numberOne)) - Big(Number(numberTwo)),
   X: (numberOne, numberTwo) => Big(Number(numberOne)) * Big(Number(numberTwo)),
  '/': (numberOne, numberTwo) => Big(Number(numberOne)) / Big(Number(numberTwo)),
  '%': (numberOne, numberTwo) => Big(Number(numberOne)) % Big(Number(numberTwo)),
};

const operate = (numberOne, numberTwo, operation) => {
  return operations[operation](numberOne, numberTwo) || '0';
};

export default operate;
