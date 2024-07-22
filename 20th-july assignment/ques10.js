function findLargestElement(arr) {
    if (arr.length === 0) {
        return "The array is empty.";
    }
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return `The largest element is ${largest}.`;
}

const array = [3, 5, 7, 2, 8, 6];
const result = findLargestElement(array);
console.log(result);
