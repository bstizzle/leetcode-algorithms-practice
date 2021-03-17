const climbStairs = n => {
    //time complexity O(N) loops n times
    //space complexity O(N) array of size n
    if(n <= 3) return n;

    let options = [0, 1, 2, 3]

    for(let i = 4; i <= n; i++){
        options.push(options[i-1] + options[i-2])
    }

    return options.pop();
};

module.exports = climbStairs;
