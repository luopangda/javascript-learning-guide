
/**for in**/

// 使用在对象上就是获取 key 值，包括原型上的方法和属性。如果不想输出，可以用Object.keys(myObject)方法或者myObject.hasOwnProperty()判断
let object = {k1:1, k2:2, k3:3};
Object.prototype.obj = '123';
for(let index in object){
    console.log(index);
}


// 1. for in 用在数组，打印各个元素的下标（字符串类型），也就相当于对象的 key + 原型上方法和字符串的键值。
let array = [1,2,3, {n:123}];

Array.prototype.str = "一个字符串";
Array.prototype.fn = ()=>{};

for(let index in array){
    console.log(index)
}

// 1. index索引为字符串型数字，不能直接进行几何运算；2.遍历顺序有可能不是按照实际数组的内部顺序 3.使用for in会遍历数组所有的可枚举属性，包括原型。
