/**
 * Created by kurry on 2019/9/8.
 */

// 求最大公约数

function gcd(a, b) {
    if(a % b === 0){
        return b
    }else {
        return gcd(b, a % b)
    }
}