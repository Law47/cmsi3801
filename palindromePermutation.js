function palindromePermutation(string) {
    string = string.toLowerCase()
    let mid = false
    while (string.length != 0) {
        let cur = string.charAt(0)
        if (cur == " ") {
            string = string.replace(cur, '')
            continue
        }
        string = string.replace(cur, '')
        if (!string.includes(cur) && mid) {
            return false
        } else if (!string.includes(cur)) {
            mid = true
        } else {
            string = string.replace(cur, '')
        }
    }
    return true
}

//Testing          
console.log(palindromePermutation("Tact Coa"))  //True
console.log(palindromePermutation("aceTo EtAc"))  //True
console.log(palindromePermutation("rac eacr"))  //True
console.log(palindromePermutation("Tact Coal"))  //False
console.log(palindromePermutation("refrigerator"))  //False