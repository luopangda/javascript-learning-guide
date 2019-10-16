let a = [7,4,5,2];

a.sort((a,b)=>a-b);

let r = []; // 存数据

let odd = 1; // 奇数位
let even = 0; // 偶数位

a.forEach(item=>{
    if(item % 2 === 1){
        r[odd] = item;
        odd += 2;
    }else {
        r[even] = item;
        even += 1;
    }
});
