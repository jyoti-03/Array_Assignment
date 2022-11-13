let arr = [10, 10, 20, 30, 40, 20, 10, 40];
let len = 0;
for (i in arr) {
    len += 1
}

// average / mean
let mean = 0;
let total = 0;
for (let i = 0; i < len; i++) {
    total += arr[i];
}
mean = total / len;
console.log(`mean ${mean}`);

// median / middle number
var median = 0;
if (len % 2 != 0) {
    median = arr[(len - 1) / 2]
} else {
    median = (arr[len / 2 - 1] + arr[len / 2]) / 2
}
console.log(`median ${median}`);

//// mode/occurs most in array
const mode_obj = {};
let mode = 0,
    count = 0;
for (let i = 0; i < len; i++) {
    const item = arr[i];
    if (mode_obj[item]) {
        mode_obj[item]++;
    } else {
        mode_obj[item] = 1;
    }
    if (count < mode_obj[item]) {
        mode = item;
        count = mode_obj[item];
    }
}
// console.log(`mode object -: ${mode_obj}`);
console.log(`mode ${mode}`);