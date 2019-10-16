/**
 * Created by kurry on 2019/9/8.
 */

let input = [1,2,3,4,4,3,2,1];

// 求最大公约数，统计数字出现的次数，然后求解最大公约数
function gcb(a, b) {
    if(b === 0){
        return a
    }else {
        return gcb(b, a%b)
    }
}
// 统计一个数组中各元素的数量
let object = input.reduce((pre,current)=>{
    pre[current] = (pre[current] + 1) || 1;
    return pre;
}, {});

// 提取数量为数组，便于操作
const numbers = Object.values(object);

while (numbers.length > 1){
    let a = numbers.shift();
    let b = numbers.shift();
    let v = gcb(a,b);
    if(v === 1) {
        return false
    }else {
        numbers.unshift(v)
    }
}

// 边界条件
return input.length ? numbers[0] > 1 : false;


//
