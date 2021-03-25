function canJump(nums) {
    //Time complexity O(N^2) nested for loops
    //Space complexity O(N) length of input array
    let positions = new Array(nums.length).fill(false);
    positions[0] = true;

    for(let j = 1; j < nums.length; j++){
        for(let i = 0; i < j; i++){
            if(positions[i] && i + nums[i] >= j){
                positions[j] = true;
                break;
            }
        }
    }

    return positions[positions.length - 1];
}

module.exports = canJump;
