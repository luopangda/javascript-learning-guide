/**
 * Created by kurry on 2019/8/20.
 */
// 正则表达式

/*匹配颜色：
alert(toRGB("#0000FF"));          // 输出 rgb(0, 0, 255)
alert(toRGB("invalid"));          // 输出 invalid
alert(toRGB("#G00"));              // 输出 #G00
*/

function toRGB(color) {
    let regex = /#(?<r>[0-9a-fA-F]{2})(?<g>[0-9a-fA-F]{2})(?<b>[0-9a-fA-F]{2})/g;
    let matchedChar = [];
    // console.log(regex.lastIndex);
    // console.log(regex.global);
    // console.log(regex.multiline);
    // console.log(regex.source);
    // while (regex.lastIndex < color.length){
    //     let match = regex.exec(color);
    //     matchedChar.push(match[0])
    // }
    let match = regex.exec(color);
    console.log(match);
    // 相当于
    // let strMethodMatch = color.match(regex);
    // console.log(strMethodMatch);
    return match ? 'rgb('+ parseInt(match.groups['r'],16) + ',' + parseInt(match.groups['g'], 16) + ',' +parseInt(match.groups['b'],16) + ')': color
    // return matchedChar
}
const input = "#aabbcc#eeff00";
let result = toRGB(input);
console.log(result);

// 匹配URL字符参数

/*
 * 1. 指定参数名称，返回该参数的值 或者 空字符串
 2. 不指定参数名称，返回全部的参数对象 或者 {}
 3. 如果存在多个同名参数，则返回参数数组
 * */
// http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe 输出 [1, 2, 3]

function getUrlParam(sUrl,sKey){
    var result = {};
    // 用 replace
    let newStr = sUrl.replace(/\??(\w+)=(\w+)&?/g,function(a,k,v){
        console.log(a,k,v);
        // a 是匹配结果；k 是子表达式1的结果， v 是子表达式2的结果
        if(result[k] !== void 0){
            var t = result[k];
            result[k] = [].concat(t,v);
        }else{
            result[k] = v;
        }
        return '占位符'
    });

    console.log(newStr);

    // 用 matchAll
    // let matches = sUrl.matchAll(/\??(\w+)=(\w+)&?/g);
    // console.log(matches);
    // for (const match of matches){
    //     let key = match[1];
    //     let value = match[2];
    //     if(result[key] !== void 0){
    //         let t = result[key];
    //         result[key] = [].concat(t, value)
    //     }else {
    //         result[key] = value
    //     }
    // }
    if(sKey === void 0){
        return result;
    }else{
        return result[sKey] || '';
    }
}
const input = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";
let result = getUrlParam(input, 'key');
console.log(result);


/*
 * 匹配连续的 n 个字符
 * */


let str = "AABBBCCCCC";
let reg = /(.)(\1)+/g;
let match = str.match(reg);


var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);
// 括号内的含义是匹配一个；但是不要被访问到，这样分割符就不会出现在结果数组内。
// | 表示或者匹配一个结束位置，这时为了后面的最后的那个空格，其实没有必要。
var re = /\s*(?:;|$)\s*/g;

var nameList = names.split(re);

console.log(nameList);


var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(?:\d)/);

console.log(splits);