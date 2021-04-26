const containsDuplicate = nums => {
  //time complexity O(n) because there is one loop
  //space complexity O(N) n is the amount of unique values in input array
  const visitedNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if(visitedNums[num]) {
      return true;
    } else {
      visitedNums[num] = true;
    }
  }

  return false;
};

module.exports = containsDuplicate;
