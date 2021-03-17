function isPalindrome(s) {
    let letterString = s.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let left = 0;
    let right = letterString.length-1;

    while(left < right){
        if(letterString[left] !== letterString[right]){
            return false;
        }
        left++;
        right--;
    }

    return true;
}

module.exports = isPalindrome;
