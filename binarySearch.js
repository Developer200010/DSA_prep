// key to note -> it only works with sorted array (ascending)
// variable required -> start, end, mid(this returns)
// while loop does the work of loop
// divide array into to part then check if target lies in left or right side of the array
// time complexity is O(log n) and space complexity is O(1)
const arr = [-2,-1,0,2,4,5,6];
const target = 61;

function binarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    
    while(start<=end){
        let mid = start + Math.floor((end-start)/2);

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid]<target){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
    }
    return "target element is not present"
}

console.log(binarySearch(arr,target))