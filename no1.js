let arr = [10, 20, 70, 40, 56, 10, 67, 10, 50];
let len = 0;
for (i in arr) {
    len += 1
}
var output = [];
for (var i = len - 1; i >= 0; i--) {
    output.push(arr[i]);
}
console.log(output);