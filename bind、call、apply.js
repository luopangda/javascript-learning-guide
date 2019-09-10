
// 手动实现call
Function.prototype.myCall = function (context) {
    if(typeof context !== "function"){
        throw new TypeError('error');
    }
    context = context || window;
    context.fn = this;
    const argues = [...arguments].slice(1);
    const result = context.fn(...argues);
    delete context.fn;
    return result;
};

// 手动实现bind：返回一个函数

Function.prototype.myBind = function (context) {
    if(typeof this !== 'function'){
        throw new TypeError('error');
    }
    const that = this;
    const argues = [...arguments];
    return function F() {
        if(this instanceof F){
            // 忽略后面传入的this
            return new that(...argues, ...arguments)
        }
        return that.apply(context, argues.concat(...arguments))
    }

};
