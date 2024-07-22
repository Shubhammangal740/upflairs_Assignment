function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "The array does not have enough elements.";
    }
    
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }
    
    if (second === -Infinity) {
        return "There is no second largest element.";
    }
    
    return `The second largest element is ${second}.`;
}


const array = [3, 5, 7, 2, 8, 6];
const result = findSecondLargest(array);
console.log(result);
