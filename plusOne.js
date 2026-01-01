let digits = [2,3,9]

function PlusOne(digits) {

    for (let i = digits.length-1; i >= 0; i--) {

        if(digits[i] < 9) {
            digits[i] += 1
            return digits
        }
        else {
            digits[i] = 0
        }
    }

    digits.unshift(1)
    return digits
}

console.log(PlusOne(digits))