import operate from './operate';

const ops = ['+', '-', 'X', '/', '%'];

const calculate = (calObj, btnName) => {
  const obj = calObj;
  if(ops.includes(obj.operation)){
    obj.total = operate(obj.total, obj.next, obj.operation);
  }
  else{
    obj.total *= -1;
  }
  obj.next = null;
  obj.operation = null;
  return obj;
};

export default calculate;
