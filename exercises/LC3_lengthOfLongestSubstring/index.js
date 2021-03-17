// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    //O(N^2) complexity
    // let index = 0;
    // let subStrLength = 0;

    // while(index < s.length){
    //     let subStr = ""
    //     for(let i = index; i < s.length; i++){
    //         if(!subStr.includes(s[i])){
    //             subStr += s[i]
    //         }else {
    //             break;
    //         }
    //     }
    //     if(subStr.length > subStrLength){
    //         subStrLength = subStr.length
    //     }
    //     index++;
    // }

    // return subStrLength;

    //O(N) complexity
    const charMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        const endChar = s[i];
        if(charMap[endChar] >= windowStart){
            windowStart = charMap[endChar] + 1
        }

        charMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1)
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;
