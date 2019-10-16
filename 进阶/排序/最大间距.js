// 寻找一个排序后数组的相邻的两个元素最大差值；


let a = [1,5,3,6,6,6,9];
let max = -Infinity;
for(let i = a.length - 1,temp; i > 0; i--){
    for(let j = 0; j < i; j++){
        temp = a[j];
        if(temp > a[j+1]){
            a[j] = a[j+1];
            a[j + 1] = temp;
        }
    }

    if( i < a.length - 1){
        if(a[i + 1] - a[i] > max){
            max = a[i+1] - a[i]
        }
    }
}

Math.max(max, a[1] - a[0]);
