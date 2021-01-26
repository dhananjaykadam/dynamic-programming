const howSum = (n, numbers, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return [];
    if (n < 0) return null;

    for (let num of numbers) {
        const result = howSum(n - num, numbers, memo);
        if (result != null) {
            memo[n] = [...result, num];
            return memo[n];
        }
    }
    memo[n] = null;
    return null;
}


console.log(howSum(7, [3, 4, 5]));
console.log(howSum(7, [1, 3, 4, 7]));
console.log(howSum(7, [8, 3, 5]));
console.log(howSum(300, [7, 14]));