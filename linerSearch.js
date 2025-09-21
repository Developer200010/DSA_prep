// keys to keep in mind i.e
// linear search contain arr and target element provided by user.
// and according to that operation's done
// time complexity = O(n) & space complexity O(1)

const arr = [1,3,2,4,9,0,5];
const target = 10;

function linearSearch(arr, target){
    const j = arr.length;
    for(let i = 0; i < j; i++){
        if(arr[i] == target){
            return i;
            break;
        }
    }
    return "target is not found"
}

console.log(linearSearch(arr, target))