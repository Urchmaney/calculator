import operate from './operate';

const ops = ['+', '-', 'X', '/', '%'];

const calculate = (calObj) => {
  const obj = calObj;
  if (ops.includes(obj.operation)) {
    obj.total = operate(obj.total, obj.next, obj.operation);
  } else if (obj.operation === '+/-') {
    obj.total *= -1;
  }
  obj.next = null;
  obj.operation = null;
  return obj;
};

export default calculate;
