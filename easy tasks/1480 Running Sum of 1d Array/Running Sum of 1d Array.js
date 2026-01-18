// Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//
// Return the running sum of nums.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:
//
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:
//
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
//
//
// Constraints:
//
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

function runningSumOf1dArray(nums) {

    let newArray = [];

    for (let a = 0; a <= nums.length; a++) {

        let arrForSum = nums.slice(0, a);

        let elementForSum = 0;

        for (let b = 0; b < arrForSum.length; b++) {
            elementForSum += arrForSum[b];
        }

        newArray.push(elementForSum);

    }

    return newArray.slice(1, newArray.length);

}

console.log(runningSumOf1dArray([1, 2, 3, 4]));
