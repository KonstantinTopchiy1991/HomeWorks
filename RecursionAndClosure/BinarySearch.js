// function binarySearch(arr, value) {
//
//     let middle = Math.floor(arr.length / 2);
//
//     if (arr[middle] === value){
//         return arr[middle];
//     }
//
//     if (arr[middle] < value){
//         return binarySearch(arr.slice(middle), value);
//     }
//     if (arr[middle] > value){
//         return binarySearch(arr.slice(0, middle), value);
//     }
//     return false;
// }


function BinarySearch(arr, value) {

    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left < right){
        middle = Math.floor((left + right) / 2);

        if (arr[middle] === value){
            return true;
        }
        
        if (arr[middle] < value){
            left = middle + 1;
        }
        if (arr[middle] > value){
            right = middle - 1;
        }
    }
    return false;
}


