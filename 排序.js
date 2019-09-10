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

// 冒泡算法：如果前一个数大，则交换它到后面去。两两交换。

function buble(array) {
    check(array);
    for(let i = array.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(array[j] > array[j+1]) swap(array, j, j+1)
        }
    }
    return array;
}

console.log(inserction([1,5,6,8,2,0,4]))

// 插入排序
function inserction(array) {
    if(!check(array)) return;
    for(let i = 1; i<array.length; i++){
        for(let j = i-1; j >= 0 && array[j] > array[j + 1]; j--){
            swap(array, j, j + 1);
        }
        console.log(array)
    }
    return array
}
/**  主要原理： 默认已排好序，遍历数组，如果发现有个值没排序
 *   比如下面的2（本来假设应该比8大），就找一个地方插进去。
 *   仍然是比较两个相邻元素的值。
 *  [1, 5, 6, 8, 2, 0, 4]
     [1, 5, 6, 8, 2, 0, 4]
     [1, 2, 5, 6, 8, 0, 4]
     [0, 1, 2, 5, 6, 8, 4]
     [0, 1, 2, 4, 5, 6, 8]
     [0, 1, 2, 4, 5, 6, 8]
 * */

