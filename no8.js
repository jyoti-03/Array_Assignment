let arr1 = [2, 4, 6, 8];
let arr2 = [8, 9, 6, 5];
for (i in arr2) {
    arr1.push(arr2[i])
}
arr1.sort(function(a, b) { return a - b });
// console.logs(arr1);
let len = 0;
for (i in arr1) {
    len += 1
}
var median = 0;
if (len % 2 != 0) {
    median = arr1[(len - 1) / 2]
} else {
    median = (arr1[len / 2 - 1] + arr1[len / 2]) / 2
}
console.log(median);