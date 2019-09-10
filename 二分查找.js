/**
 * Created by kurry on 2019/9/7.
 */
function binary_search(array, item){
    let low = 0;
    let high = array.length - 1;
    while(low <= high){
        let mid = Math.floor((low + high) / 2);
        let guess = array[mid];
        if(guess === item){
            return mid;
        }else if(guess > item) {
            high = mid;
        }else if(guess < item){
            low = mid
        }
    }
}