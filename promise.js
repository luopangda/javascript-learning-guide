/**
 * Created by kurry on 2019/8/20.
 */

// 手写Promise

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn){
    // 内部异步执行，可能会有不同的this
    const that = this;
    that.state = PENDING;
    that.value = null;
    // 如果还在pending，过后会在这里取出回调函数，改变状态的时候用。
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve(value) {
        if(that.state === PENDING){ // 只有在等待中才可以更改状态
            // 更改函数的内部状态
            that.state = RESOLVED;
            // 现在的值是resolve接收的值
            that.value = value;
            // 遍历回调函数，传入的参数是resolve接收的值
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if(that.state === PENDING){
            // 更改函数的内部状态
            that.state = REJECTED;
            // 现在的值是resolve接收的值
            that.value = value;
            // 遍历回调函数，传入的参数是resolve接收的值
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    // 执行传入的函数，没错，Promise的参数就是一个函数。
    try{
        fn(resolve, reject)
    }catch(e) {
        reject(e)
    }
}

//    最后实现比较难的then函数

MyPromise.prototype.then = function(onFullfilled, onRejected){
    const that = this;
    // onFullfilled, onRejected 两者必须为函数，先判断一下，不是就替换成函数
    onFullfilled = typeof onFullfilled === "function" ? onFullfilled : v=>v;
    onRejected = typeof onRejected === "function" ? onRejected : r=>{throw r};
    if(that.state === PENDING){
        that.resolvedCallbacks.push(onFullfilled)
        that.rejectedCallbacks.push(onRejected)
    }

    if(that.state === RESOLVED){
        onFullfilled(that.value)
    }

    if(that.state === REJECTED){
        onRejected(that.value)
    }
}

new MyPromise((resolve, reject)=>{
    console.log(1)
    setTimeout(()=>{

    }, 0)
    resolve(2)
    console.log(3)
}).then(value=>{
    console.log(value)
});


// promise /A+

