/**
 * Created by kurry on 2019/9/8.
 */

function test1(arr, m, n) {
    let dp = (m, n)=>{
        if(m===2 && n===2){
            return(arr[1][1] === 1 || a[1][0] + arr[0][1] === 2) ? 0:(arr[0][1]===1 || arr[1][0]===1 ? 1:2)
        }else if(m < 2 || n < 2){
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
            return dp(m-1, n) + dp(m, n-1)
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