// Lucky Numbers in a Matrix

// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
//
// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
//
//
//
// Example 1:
//
// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:
//
// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:
//
// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.
//
//
// Constraints:
//
// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 105.
// All elements in the matrix are distinct.

function LuckyNumbersInAMatrix(matrix) {

    function findMinInArr(arr) {
        let minInArr = arr[0];
        let indexOfMinInArr = 0;
        for (let a = 1; a < arr.length; a++) {
            if (arr[a] < minInArr) {
                minInArr = arr[a];
                indexOfMinInArr = a;
            }
        }
        return {minInArr: minInArr, indexOfMinInArr: indexOfMinInArr};
    }

    function findMaxInArr(arr) {
        let maxInArr = arr[0];
        for (let a = 1; a < arr.length; a++) {
            if (arr[a] > maxInArr) {
                maxInArr = arr[a];
            }
        }
        return maxInArr;
    }

    let m = matrix.length;
    let n = matrix[0].length;
    let result = [];

    for (let i = 0; i < m; i++) {
        const minObj = findMinInArr(matrix[i]);
        const minVal = minObj.minInArr;
        const colIndex = minObj.indexOfMinInArr;

        let isMaxInCol = true;
        for (let row = 0; row < m; row++) {
            if (matrix[row][colIndex] > minVal) {
                isMaxInCol = false;
                break;
            }
        }

        if (isMaxInCol) {
            result.push(minVal);
        }
    }

    return result;

}

console.log(LuckyNumbersInAMatrix([[3,6],[7,1],[5,2],[4,8]]));
