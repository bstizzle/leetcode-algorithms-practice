function rob(nums) {
    //Time complexity O(N), loops over array once
    //Space complexity O(N), length of input array
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);

    let maxLootAt = [nums[0], Math.max(nums[0], nums[1])]

    for(let i = 2; i < nums.length; i++){
        maxLootAt.push(Math.max(nums[i] + maxLootAt[i-2], maxLootAt[i-1]))
    }

    return maxLootAt.pop();
}

module.exports = rob;
