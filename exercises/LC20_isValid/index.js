const isValid = s => {
    //time complexity O(N) linear, only iterate once
    //space complexity O(N) size is the length of input string
    const pairsHash = {"(":")", "{":"}", "[":"]"}
    let stack = []

    for(let i = 0; i < s.length; i++){
        let side = s[i]
        if(pairsHash[side]){
            stack.push(side);
        }else if(pairsHash[stack.pop()] != side){
            return false;
        }
    }

    return stack.length === 0;
};

module.exports = isValid;
