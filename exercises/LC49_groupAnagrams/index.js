function groupAnagrams(strs) {
    //time O(N K log K) N is # of strings K is length of strings
    //space O(N K) size of our hash table
    let groupedStrs = {};

    for(let i = 0; i < strs.length; i++){
        let key = strs[i].split('').sort().join();
        if(!groupedStrs[key]){
            groupedStrs[key] = []
        }

        groupedStrs[key].push(strs[i])
    }

    return Object.values(groupedStrs);
}

module.exports = groupAnagrams;
