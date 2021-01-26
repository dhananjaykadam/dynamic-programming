
const canSum = (n, numbers, memo = {}) => {
    if (n in memo) return memo[n];
    if (n === 0) return true;
    if (n < 0) return false;

    for (let num of numbers) {
        const result = canSum(n - num, numbers, memo);
        if (result === true) {
            memo[n] = true;
            return true;
        }
    }
    memo[n] = false;
    return false;
}

console.log(canSum(7, [3, 4, 5]));
console.log(canSum(7, [3, 3, 3]));
console.log(canSum(300, [14, 7]));