let arr = [3, 6, 7, 8, 5, 10];
let s = 12;
for (i in arr) {
    for (j in arr) {
        if ((arr[i] + arr[j] == s) && (arr[i] != arr[j])) {
            console.log(arr[i], arr[j]);
            arr.splice(i, 1);
        }
    }
}