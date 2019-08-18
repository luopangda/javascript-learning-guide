//
// function checkIsArray(array){
//     return Array.isArray(array);
// }
//
// function swap(array, left, right){
//     const rightValue = array[right];
//     array[right] = array[left];
//     array[left] = rightValue;
// }
//
// function sort(array){
//     if(!checkIsArray(array)){
//         quickSort(array, 0, array.length -1 )
//         return array;
//     }
// }
//
// function quickSort(array, left, right){
//     if(left < right){
//         swap(array, , right)
//         let indexs = part(array, parseInt(Math.random()*(right-left+1)) + left, right);
//         quickSort(array, left, indexs[0]);
//         quickSort(array, indexs[1] + 1, right);
//     }
// }
//
// function part(array, left, right) {
//     let less = left - 1;
//
// }


// function quickSort(array){
//     if(array.length < 2){
//         return array
//     }else {
//         let pivot = array.splice(Math.floor(array.length/2),1)[0];
//         let pre = [];
//         let pro = [];
//         for(let i = 0; i<array.length; i++){
//             if(array[i] > pivot){
//                 pro.push(array[i])
//             }else {
//                 pre.push(array[i])
//             }
//         }
//         return quickSort(pre).concat(pivot, quickSort(pro))
//     }
// }
// const input = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";
// let result = getUrlParam(input);
// console.log(result);

// 正则表达式

// 匹配颜色：
// alert(toRGB("#0000FF"));          // 输出 rgb(0, 0, 255)
// alert(toRGB("invalid"));          // 输出 invalid
// alert(toRGB("#G00"));              // 输出 #G00

function toRGB(color) {
    let regex = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/g;
    let matchedChar = [];
    // console.log(regex.lastIndex);
    // console.log(regex.global);
    // console.log(regex.multiline);
    // console.log(regex.source);
    while (regex.lastIndex < color.length){
        let match = regex.exec(color);
        matchedChar.push(match[0])
    }
    // return match ? 'rgb('+ parseInt(match[1],16) + ',' + parseInt(match[2], 16) + ',' +parseInt(match[3],16) + ')': color
    return matchedChar
}


// 匹配URL字符参数

/*
* 1. 指定参数名称，返回该参数的值 或者 空字符串
2. 不指定参数名称，返回全部的参数对象 或者 {}
3. 如果存在多个同名参数，则返回参数数组
* */

// function getUrlParam(sUrl,sKey){
//     var result = {};
//     sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
//         if(result[k] !== void 0){
//             var t = result[k];
//             result[k] = [].concat(t,v);
//         }else{
//             result[k] = v;
//         }
//     });
//     if(sKey === void 0){
//         return result;
//     }else{
//         return result[sKey] || '';
//     }
// }

// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe 输出 [1, 2, 3]

function getUrlParam(sUrl, sKey) {
    let results = {};
    let regExp = /\??(\w+)=(\w+)&?/g;
    let isMultiParams = false;
    let multiParamsKey;
    sUrl.replace(regExp, (a, k, v)=>{
        if(results[k] !== void 0){
            let temp = results[k];
            results[k] = [].concat(temp, v);
            isMultiParams = true;
            multiParamsKey = k;
        }else {
            results[k] = v;
        }
    });
    if(isMultiParams){
        return results[multiParamsKey]
    }else {
        if(sKey === void 0){
            return results
        }else {
            return results[sKey] || ''
        }
    }
}


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


