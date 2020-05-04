var arrangeCoins = function(n) {
    let rows = 0;

    while(n > rows){
        rows++;
        n -= rows;
    }
    return rows;
};
console.log(arrangeCoins(8));
