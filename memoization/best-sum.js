const bestSum = (n, numbers, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return [];
    if (n < 0) return null;

    let bestSumResult = null;
    for (let num of numbers) {
        const result = bestSum(n - num, numbers, memo);

        if (result !== null) {
            const newSum = [...result, num];
            if (!bestSumResult || bestSumResult.length > newSum.length) {
                bestSumResult = newSum;
            }
        }
    }
    memo[n] = bestSumResult;
    return bestSumResult;
}


console.log(bestSum(7, [3, 4, 5]));
console.log(bestSum(7, [1, 3, 4, 6]));
console.log(bestSum(300, [1, 3, 4, 100]));