// 输入："25525511135"
// 输出：["",]

/**
 * 递归三要素：重复一个内容
 * @param arr 边界条件
 * @param str 返回一个结果
 */
// 保存所有符合结果的IP
let str = "25525511135";
let  r = [];
// 递归函数
function f(cur, sub) {
    if(cur.length === 4 && cur.join() === str){
        r.push(cur.join('.'))
    }else {
        for (let i = 0, len = Math.min(3, sub.length); i<len; i++){
            let temp = sub.substr(0, i + 1);
            if(temp<256){
                f(cur.concat([temp]), sub.substr(i+1))
            }
        }
    }
}
f([], str);
