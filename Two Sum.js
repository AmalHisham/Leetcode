let nums = [2,7,11,15]
let target = 9


var twoSum = function(nums, target) {

    const prevMap = new Map()
   
   for(let i = 0; i < nums.length; i++) {
    let needed = target - nums[i]

    if(prevMap.has(needed)) {
        return [i, prevMap.get(needed)]
    }

    else {
        prevMap.set(nums[i], i)
    }

   }
  
};

console.log(twoSum(nums,target))