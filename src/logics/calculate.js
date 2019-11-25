import operate from './operate';

const calculate = (calObj, btnName) => {
  switch (btnName) {
    case '+/-':
      calObj.total *= -1;
      calObj.next *= -1;
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      const total = operate(calObj.total,calObj.next,btnName);
      calObj.total = total;
      break;
    default :
  }
  return calObj;
};

export default calculate;
