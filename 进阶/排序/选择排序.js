// 选择排序

let a = [1,2,3,2,5,4]

for(let i = 0; i<a.length; i++){
    let min = a[i];
    for(let j = i+1; j<a.length; j++){
        if(a[j] < min){
            let c = min;
            min = a[j];
            a[j] = c;
        }
    }
    a[i] = min;
}

console.log(a);
