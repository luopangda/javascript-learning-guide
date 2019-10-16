/**
 * Created by kurry on 2019/9/8.
 */

function test1(arr, m, n) {
    let dp = (m, n)=>{
        if(m===2 && n===2){ // 边界条件一
            return(arr[1][1] === 1 || a[1][0] + arr[0][1] === 2) ? 0:(arr[0][1]===1 || arr[1][0]===1 ? 1:2)
        }else if(m < 2 || n < 2){ // 边界条件二
            if(m < 2){
                // 单行
                return arr[m-1].includes(1) ? 0:1
            }else {
                // 单列
                for(let i =0; i < m; i++){
                    if(arr[i][0] === 1){
                        return 0
                    }
                }
                return 1
            }
        }else {
            return dp(m-1, n) + dp(m, n-1) // 最优子结构，也是状态方程
        }
    }

    return dp(m, n)
}


function test2(src, dst, k){
    // n 个城市的航班详情
    let fights = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500],
    ];

    let cheap = (src, dst, k)=>{
        // 找到dst前一站
        let prev = fights.filter(item=>{
            return item[1] === dst
        });
        let min = Math.min.apply(null, prev.map(item=>{
        //    从dst开始找，找到了起始城市；
            if(item[0] === src && k > -1){
                return item[2]
            }else if(k === 0 && item[0] !== src){
                return Number.MAX_SAFE_INTEGER
            }else {
                return item[2] + cheap(src, item[0], k-1)
            }
        }))

        return min
    }

}


// 求最长公共子序列的长度

let a = 'BDCABA';
let b = 'ABCBDAB';

function lcs(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let dp = [];// 定义一个二维数组，[m+1,n+1]
    for(let i = 0; i<=len1;i++){
        dp[i] = [];
        for(let j =0; j<=len2;j++){
            if(i===0 || j===0){
                dp[i][j] = 0; // 构造一个[m+1,n+1]二维数组
                continue;
            }
            if(str1[i -1] === str2[j - 1]){
                dp[i][j] = dp[i - 1] + dp[j - 1] + 1; // 遇到相同的就在同一行，前一个元素的基础上 + 1
            }else {
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);// 否则取当前位置的上面或左面的最大数
            }
        }
        return dp[len1][len2] // 返回最大值即可
    }
}

// 求最长公共子序列有哪些（打印出来）
function printLcs(dp, str1, str2, i, j) { // 传入构造好的dp
    if(i === 0 || j === 0){ // 边界条件
        return ''
    }
    if(str1[i - 1] === str2[j - 1]){// 看字符串 如果两个字符串最后一个字符相同就去递归，
        // 这里假设printLcs(dp, str1, str2, i-1, j-1)是已知的结果
        return printLcs(dp, str1, str2, i-1, j-1) + str1[i - 1];
    }else if(dp[i][j-1] > dp[i-1][j]){ // 看dp
        return printLcs(dp, str1, str2, i, j-1);
    }else {
        return printLcs(dp, str1, str2,i-1,j)
    }
}


//
