function isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
    }
    
    const sMap = {}
    const tMap = {}

    for(let i = 0; i < s.length; i++){
        if(s[i] in sMap){
            sMap[s[i]] += 1
        }else {
            sMap[s[i]] = 1
        }
    }

    for(let i = 0; i < t.length; i++){
        if(t[i] in tMap){
            tMap[t[i]] += 1
        }else {
            tMap[t[i]] = 1
        }
    }

    for(let i = 0; i < s.length; i++){
        if(sMap[s[i]] !== tMap[s[i]]){
            return false;
        }
    }

    return true;

    // let sSort = s.split("").sort().join()
    // let tSort = t.split("").sort().join()

    // if(sSort === tSort){
    //     return true;
    // }else{
    //     return false;
    // }
}

module.exports = isAnagram;
