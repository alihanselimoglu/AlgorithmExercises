export const MultiplicativePersistence = (num) => {
    if(num < 10) return false
    
    let index = 0
    let product = num

    while (product > 9) {
        let numArr = product.toString().split('')
        product = 1
        numArr.forEach(digit => {
            product *= digit
        });

        index++
    }

    return index
}