 // 冒泡排序

 let a = [1,5,4,7,8,9];

function change(arr, i, j) {
    let temp = arr[i];
    arr[j] = arr[i];
    arr[i] = temp;
}

function bole(arr) {
    for(let i = arr.length - 1; i > 0; i--){ // 循环的边界，一次比一次小
        for(let j = 0; j < i; j++){
            if( arr[i] > arr[j]){
                change(arr, i, j)
            }
        }
    }
    return arr;
}

bole(a)
