const nums = [1,2,3,1]

function containDuplicates(nums) {

    const prevMap = new Map()

    for (let i = 0 ; i < nums.length; i++) {

        if(prevMap.has(nums[i])) {
            return true
        }

        prevMap.set(nums[i],i)
    }

    return false
}

console.log(containDuplicates(nums))

