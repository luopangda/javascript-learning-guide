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
const input = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";
let result = getUrlParam(input);
console.log(result);

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
