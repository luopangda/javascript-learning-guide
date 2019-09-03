//
// function checkIsArray(array){
//     return Array.isArray(array);
// }
//
// function swap(array, left, right){
//     const rightValue = array[right];
//     array[right] = array[left];
//     array[left] = rightValue;
// }
//
// function sort(array){
//     if(!checkIsArray(array)){
//         quickSort(array, 0, array.length -1 )
//         return array;
//     }
// }
//
// function quickSort(array, left, right){
//     if(left < right){
//         swap(array, , right)
//         let indexs = part(array, parseInt(Math.random()*(right-left+1)) + left, right);
//         quickSort(array, left, indexs[0]);
//         quickSort(array, indexs[1] + 1, right);
//     }
// }
//
// function part(array, left, right) {
//     let less = left - 1;
//
// }


// function quickSort(array){
//     if(array.length < 2){
//         return array
//     }else {
//         let pivot = array.splice(Math.floor(array.length/2),1)[0];
//         let pre = [];
//         let pro = [];
//         for(let i = 0; i<array.length; i++){
//             if(array[i] > pivot){
//                 pro.push(array[i])
//             }else {
//                 pre.push(array[i])
//             }
//         }
//         return quickSort(pre).concat(pivot, quickSort(pro))
//     }
// }


