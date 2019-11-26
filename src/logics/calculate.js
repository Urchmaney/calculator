import operate from './operate';

const calculate = (calObj, btnName) => {
  const obj = calObj;
  switch (btnName) {
    case '+/-':
      obj.total *= -1;
      obj.next *= -1;
      break;
    case '+':
    case '-':
    case '*':
    case '/':
    case '%':
      obj.total = operate(calObj.total, calObj.next, btnName);
      break;
    default:
  }
  return obj;
};

export default calculate;
