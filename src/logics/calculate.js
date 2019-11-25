import operate from './operate';

const calculate = (calObj, btnName) => {
	switch(btnName) {
		case '+/-' :
			calObj.total = (calObj.total * -1);
      calObj.next = (calObj.next * -1);
      break;
		case '+' :
		case '-' :
		case '*' :
		case '/' :
		case '%' :
      calObj.total = operate(calObj.total,calObj.next,btnName);
      break;
		default :
	};
	return calObj;
}

export default calculate;
