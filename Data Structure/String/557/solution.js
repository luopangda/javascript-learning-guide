
// 自己的方法
var reverseWords = function(s) {
    let sArray = s.split(' ');
    let newStr = sArray.map(item=>{
        let tempItem = item.split('');
        return tempItem.reverse().join('');
    });
    return newStr.join(' ')
};

// 优化以后
