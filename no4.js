// duplicate elements
let l = [1, 2, 3, 4, 5, 2, 3, 6];
uniques = []
for (var i of l) {
    if (!uniques.includes(i)) {
        uniques.push(i)
    }
}
console.log(uniques);