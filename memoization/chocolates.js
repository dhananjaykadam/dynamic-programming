
const chocolateFromWrappers = (chocolates, wrap) => {
    if (chocolates < wrap) return 0;

    const newChoc = chocolates / wrap;
    return newChoc + chocolateFromWrappers(newChoc + chocolates % wrap, wrap);
}

const money = 45;
const wrap = 3;
const initialChocolates = money * 3;

const totalChocolates = initialChocolates + chocolateFromWrappers(initialChocolates, wrap);
console.log(parseInt(totalChocolates));