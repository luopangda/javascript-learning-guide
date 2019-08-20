/**
 * Created by kurry on 2019/8/17.
 */
function *foo(x){
    let y = 2 * ( yield (x + 1) );  // yield 表示屈服
    let z = 2 * ( yield (y / 3) );
    let k = yield (z / 2);
    return (x + y + z + k);
}

let it = foo(5); // foo函数返回的是一个迭代器：
// console.log(it.next()); // 传参会被忽略，和it.next()一样的作用，“屈服”于第一个yield
// 返回的是一个对象：第一个yield后面计算的值，完成状态（未完成，false）。所以返回：{value: 6, done: false}
// console.log(it.next(10)); // 此时必须传参了，it.next() 不传参返回的是：{value: NaN, done: false}，“屈服”于第二个yield
// 如果传参，那么这个参数就会替换掉上一个 yield 计算得到的结果6，然后参与到乘以2的运算。
//此时 let y = 2 * 10; 第二个yield计算的结果是 20 / 3，所以返回：{value: 6.666..., done: false}
// console.log(it.next(13)); // 此时必须传参了，it.next() 不传参返回的是：{value: NaN, done: false}
// 如果传参，那么这个参数就会替换掉上一个 yield 计算得到的结果6.6666，然后参与赋值运算。
// 此时 let z = 2 * 13; 那么 ，第三个yield计算的结果是 26 / 2，所以返回：{value: 13, done: false}
// console.log(it.next(14)); // 此时必须传参了，it.next() 不传参返回的是：{value: NaN, done: false}
//如果传参，那么这个参数就会替换掉上一个 yield 计算得到的结果6.6666，然后参与赋值运算。
// 此时 let k = 14; 那么 z = 26，y = 20, x = 5, 所以返回：{value: 65, done: true}

// 总结：1. 在结束之前，永远返回的都是yield后面的值。第几个next()，就返回第几个 yield 后面的计算结果。
// 2. 从第二个next()开始，必须传入参数，替换上一个yield的结果，比如第二个next()的参数替换第一个yield，但是返回的是第二个yield后面的计算值；
// 第三个next()的参数替换第二个yield的值参与计算，但是返回第三个yield后面的计算值。

/*
 __proto__: Generator // 指向的是 Generator 对象，有三个方法：next、return、throw
 [[GeneratorLocation]]: asynchronous.js:4
 [[GeneratorStatus]]: "suspended"
 [[GeneratorFunction]]: ƒ *foo(x)
 [[GeneratorReceiver]]: Window
 [[Scopes]]: Scopes[3]
 */



function *fetch(x) {
    let y = yield x+1;
    yield 2; // y 是 2 的话就可以不用传值，也就是说，后面的 yield 引用了前面的yield计算的时候就需要一个参数（确定值）代替前一个yield计算结果。
    yield 3;
    return 8
}
let it2 = fetch(1);
// console.log(it2.next()); // {value: 1, done: false}
// console.log(it2.next()); // {value: 2, done: false}，如果第二个yield后面的算式包含了前面第一个yield的结果，那么就必须传值。否则返回{value: undefined, done: false}
// console.log(it2.next()); // {value: 3, done: false}
// console.log(it2.next()); // {value: 8, done: true}
// console.log(it2.next(1)); // {value: undefined, done: true} // 已经处于结束状态了.传参或者不传都是返回undefined。


// 手写promise

// let promise = new Promise((resolve, reject)=>{
//     console.log('new Promise'); // 说明promise是立即执行的，这和D3、maptalk的实例一样
//     console.log(resolve);
//     console.log(typeof resolve);
//     resolve('1'); // 如果不注释掉，下面的console.log(promise);返回的是__proto__: Promise
//                                                                          //[[PromiseStatus]]: "resolved"
//                                                                          //[[PromiseValue]]: "1"
//
//     // resolve('success');// 如果都注释掉，下面的console.log(promise);返回的是__proto__: Promise
//                                                                             //[[PromiseStatus]]: "pending"
//                                                                             //[[PromiseValue]]: "undefined"
//     reject('0'); //这行代码失效，因为上面已经调用了resolve返回了一个状态，就不会再被改变。
//
// });
// console.log(promise);



// 链式调用

let initialResolve = Promise.resolve(1);
console.log(initialResolve); // 返回如下：
/*
 __proto__: Promise
 [[PromiseStatus]]: "resolved"
 [[PromiseValue]]: 1
*/
let then_1 = initialResolve.then(res =>{
    console.log(res);  // 先执行后面的三个打印，包括finish，再执行此行打印，结果为 1 ;
    return false ;// 返回值2，会被包装成resolved的值
});

let then_2 = then_1.then(res =>{
    console.log(res);  // 先执行后面的三个打印，包括finish，再执行此行打印，结果为 2 ;
    return 3; // 返回值3，会被包装成resolved的值
}, hh=>{
    //查看是否会执行
    console.log(hh)
    console.log(123)
});

// 综合写法

// Promise.resolve(1)
//     .then(res=>{
//         console.log(res);
//         return 2
//     })
//     .then(res=>{
//         console.log(res);
//         return 3
//     });
// 如果有两个promise存在，先把不是promise.then的代码执行完毕（打印promise本身不是执行promise），再执行第一个promise
// 第一个promise的第一个then结束以后，执行第二个promise的第一个then。
// 然后再接着执行第一个promise的第二个then，执行第二个promise的第二个then
// 所以打印顺序是
/*
* Promise {<resolved>: 1}
 asynchronous.js:104 Promise {<pending>} // 会变成resolved，返回的是2
 asynchronous.js:105 Promise {<pending>} // 会变成resolved，返回的是3
 asynchronous.js:107 finifsh
 asynchronous.js:83 1
 asynchronous.js:96 1
 asynchronous.js:88 2
 asynchronous.js:100 2
* */

console.log(then_1); //pending的状态，等到上面执行完毕变成resolved，值为 2
console.log(then_2); //pending的状态，等到上面执行完毕变成resolved，值为 3

console.log('finifsh');

// Promise
// 优点：1.很好地解决了回调地狱的问题，
// 缺点：1. 无法取消promise 2.无法捕捉

// promise 的应用1：

let pro = function(){
    return new Promise((resolve, reject)=>{
        let isHaveData = '';
        if(isHaveData){
            resolve('suceess')
        }else {
            reject('error')
        }
    })
};

let p = pro();
p.then(v=>console.log(v), e=>console.log(e)); // 如果没有数据就返回error，如果有就返回success