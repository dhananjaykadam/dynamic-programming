
const traveler = (m, n, memo = {}) => {
    const key = m + "," + n;
    if (key in memo) return memo[key];
    if (m === 0 || n === 0) return 0;
    if (m === 1 && n === 1) return 1;

    memo[key] = traveler(m - 1, n, memo) + traveler(m, n - 1, memo);
    return memo[key];
}

console.log(traveler(2, 3));
console.log(traveler(18, 18));
