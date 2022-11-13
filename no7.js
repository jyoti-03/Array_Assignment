arr1 = [1, 2, 3, 4, 5];
arr2 = [2, 3, 7, 8, 9];
for (i in arr2) {
    arr1.push(arr2[i])
}
var number_list = arr1
uniques = []
duplicates = []
for (var i of number_list) {
    if (!uniques.includes(i)) {
        uniques.push(i)
    }
}
for (var j of uniques) {
    count = 0
    for (var k of number_list) {
        if (j === k) {
            count += 1
        }
    }
    if (count > 1) {
        duplicates.push(j);
    };
}
duplicates.sort(function(a, b) { return a - b });
console.log(duplicates);