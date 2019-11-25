import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  switch(operation) {
		case '+' :
			return Big(numberOne) + Big(numberTwo);
		case '-' :
      return Big(numberOne) - Big(numberTwo);
		case '*' :
      return Big(numberOne) * Big(numberTwo);
		case '/' :
      return Big(numberOne) / Big(numberTwo);
		case '%' :
      return Big(numberOne) % Big(numberTwo);
    default :
      return;
	};
}

export default operate;
