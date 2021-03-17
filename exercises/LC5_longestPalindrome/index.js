//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    let startIndex = 0;
    let palinLength = 1;

    function expandAroundIndex(left, right){
        while(left >= 0 && right <= s.length && s[left] === s[right]){
            let currentPalLength = right - left + 1;
            if(currentPalLength > palinLength){
                palinLength = currentPalLength;
                startIndex = left;
            }
            left--;
            right++;
        }
    }

    for(let i = 0; i < s.length; i++){
        expandAroundIndex(i-1, i+1)
        expandAroundIndex(i, i+1)
    }

    return s.slice(startIndex, startIndex + palinLength);
}

module.exports = longestPalindrome;
