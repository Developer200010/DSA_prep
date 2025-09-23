// key to note -> this is a sorting algorithm works both way ascending and descending
// loop start first after that i need key = arr[i] and j (to shift value according to condition)
// let ascending arr[i]>key -> arr[j+1](this shift to first(1 index)) = arr[j](it always target 0 index)
// arr[j+1] = key it means key is greater then first value in index
const arr = [12,11,13,5,6];

function insertionSort(arr){
    for(let i = 1; i< arr.length; i++){

        let key = arr[i];
        let j = i-1;
        
        while(arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

const result = insertionSort(arr)
console.log(result)