function lengthOfLIS(nums) {
    //Time complexity O(N^2) nested for loops
    //Space complexity O(N) size of input array
    if(nums.length === 0) return 0;

    let substrings = new Array(nums.length).fill(1);
    let maxLength = 1;

    for(j = 1; j < nums.length; j++){
        for(i = 0; i < j; i++){
            if(nums[j] > nums[i]){
                substrings[j] = Math.max(substrings[i]+1, substrings[j])
            }
        }

        maxLength = Math.max(maxLength, substrings[j])
    }

    return maxLength;
}

module.exports = lengthOfLIS;
