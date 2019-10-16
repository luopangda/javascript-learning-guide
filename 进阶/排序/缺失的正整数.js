// 正整数从 1 开始；

let a = [1,2,3,5,0, -5, -1];

// 首先过滤负数

a = a.filter(item => item > 0);

// 判断数组是否为空，如果为空，返回 1；

if(a.length === 0){
    return 1
}else {
    // a.sort(); // 升序
    // if(a[0] !==1 ){
    //     return 1
    // }else {
    //     for(let i = 0; i < a.length; i++){
    //         if(a[i+1] -  a[i] > 1){
    //             return a[i] + 1
    //         }
    //     }
    //     return a.pop() + 1;
    // }

//    利用选择排序
    for(let i = 0; i<a.length; i++){
        let min = a[i];
        for(let j = i+1; j<a.length; j++){
            if(a[j] < min){
                let c = min;
                min = a[j];
                a[j] = min;
            }
        }
        a[i] = min;
        if(i > 0){
            if(a[i+1]-a[i] > 1){
                return a[i] + 1
            }
        }else {
            if(min !== 1){
                return 1
            }
        }
    }
    return a.length ? a.pop() + 1 : 1
}
