// key to note-> it take first element as smallest element and compare to all other element (ideology) (ascending order);
// if after comparing got small element it takes the index and store in a variable which was holding the first smallest element;
// and then it starts to swap the value;

const arr = [2,5,6,4,3,21,0];
const n = arr.length;
let temp;
function selectionSort(arr,n){
    for(let i = 0; i< n; i++){
        let min_index=i;
        for(let j = i+1;j<n; j++){
            if(arr[j]<arr[min_index]){
                min_index=j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min_index];
        arr[min_index] = temp;
    }
    return arr;
}

const result = selectionSort(arr,n)
console.log(result)