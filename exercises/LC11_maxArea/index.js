function maxArea(height) {
  //time complexity O(N) each index is visisted once
  //space complexity O(1)
  let leftP = 0;
  let rightP = height.length - 1;
  let maxArea = 0;

  while(leftP < rightP){
    const currentArea = Math.min(height[leftP], height[rightP]) * (rightP - leftP);
    maxArea = Math.max(currentArea, maxArea);

    if(height[leftP] < height[rightP]){
      leftP++
    } else {
      rightP--
    }
  }

  return maxArea;
}

module.exports = maxArea;
