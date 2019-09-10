/**
 * Created by kurry on 2019/9/3.
 */

// 手写bind、call、apply

Function.prototype.myCall = function (context) {
  if(typeof this !== 'function'){
      throw new Error('error')
  }
  context = context || window;
  context.fn = this;
  let argus = [...arguments].slice(1);
  const result = context.fn(...argus);
  delete context.fn;
  return result;
};