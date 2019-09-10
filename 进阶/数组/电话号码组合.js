/**
 * Created by kurry on 2019/9/8.
 */

// “23” 组合的字母是：ad, ae, af, bd, be, bf, cd, ce, cf。

let input = {2:"abc", 3:'def', 4:'ghi', 5: 'jkl', 6:'mno', 7:'pqrs', 8:'tuv', 9:'xyz'};

let array = [];

let a = "235";

for(let i = 0; i < a.length; i++){
    array.push(input[a[i]].split(''))
}

function test(a1, a2) {
    // 临时变量，保存a1和a2的结果
    let result = [];
    for(let i = 0; i<a1.length; i++){
        for(let j = 0; j <a2.length; j++){
            result.push(a1[i] + a2[j])
        }
    }
    array.splice(0, 2, result);
    if(array.length > 1){
        // 传到外层，否则递归接收不到。
        return test(array[0], array[1])
    }else {
        return array[0]
    }
}

let hhh = test(array[0], array[1]);

console.log(hhh);
