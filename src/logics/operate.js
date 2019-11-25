import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = Big(numberOne) + Big(numberTwo);
    case '-' :
      result = Big(numberOne) - Big(numberTwo);
    case '*' :
      result = Big(numberOne) * Big(numberTwo);
    case '/' :
      result = Big(numberOne) / Big(numberTwo);
    case '%' :
      result = Big(numberOne) % Big(numberTwo);
    default :
  };
  return result;
}

export default operate;
