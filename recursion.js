/**
 * Created by kurry on 2019/8/20.
 */
// 递归

function test(str) {
    let reg = /\[(\d+)\|([A-F]+)\]/g;
    let newStr = str.replace(reg,(a,num,v)=>{
        console.log(a,num,v);
        let temp = '';
        for(let i = 0; i<parseInt(num); i++){
            temp += v
        }
        return temp
    });

    if (newStr.indexOf('[') === -1) {
        // 基准条件
        return newStr;
    }else {
        // 递归条件，减小问题规模，下一次递归依赖本次替换结果（已经替换n个字符串的新字符串）
        // 添加返回是因为最后一次调用递归后，
        // 虽然达到基准条件，被调用的那次函数（第 n 次）有返回值，但是没有返回给第n-1次，外层函数也获取不到返回值。
        console.log(test(newStr));// 最后一次调用得到最后结果，一定要返回给外层函数！！！
        return test(newStr);
    }
}

let input = 'HG[2|AA[1|BC]]FF[2|D]';
let result = test(input);
console.log(result);
// while (input.indexOf('[') !== -1 ){ // 循环条件
//    input = test(input);  // 循环调用
// }

// 快速排序

// function test(array) {
//     let mid = Math.floor(array.length/2);
//     let theMidValue = array.splice(mid, 1)[0];
//     let left = [];
//     let right = [];
//     array.forEach(item=>{
//         if(item > theMidValue){
//             right.push(item)
//         }else {
//             left.push(item)
//         }
//     });
//
//     let newLeft = test(left); // 缩小问题规模
//     let newRight = test(right); // 缩小问题规模
//
//     if(array.length < 2){
//         // 只有一个元素或者为元素为空都是有序的
//         // 基准条件
//         return array
//     }
//     return newLeft.concat(theMidValue, newRight)
// }
// let input = [1,5,6,7,1];