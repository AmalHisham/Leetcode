let s = "anagram"
let t = "nagaram"

function isAnagram(s,t) {

    if(s.length != t.length) {
        return false
    }

    const prevMap = new Map()

    for (let character of s) {
        if(prevMap.has(character)) {
            prevMap.set(character, prevMap.get(character) + 1)
        }
        else {
            prevMap.set(character,1)
        }
    }


    for (let character of t) {
        if(!prevMap.has(character)) {
            return false
        }
        
        else {
        prevMap.set(character, prevMap.get(character) - 1)
        }

        if(prevMap.get(character) < 0) {
            return false
        }
        
    }

    return true
}

console.log(isAnagram(s,t))