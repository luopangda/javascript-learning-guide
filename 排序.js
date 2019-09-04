/**
 * Created by kurry on 2019/9/4.
 */
// 冒泡

// 交换两个元素的位置
function swap(array, left, right) {
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;
}

// 检查是否是数组

function check(array) {
    return Array.isArray(array)
}

// 冒泡算法：

function buble(array) {
    check(array);
    for(let i = array.length; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j+1]) swap(array, j, j+1)
        }
    }
    return array
}

