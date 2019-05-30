/*question
Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/

//solution 

function comp(array1, array2) {
    if (Array.isArray(array1) && Array.isArray(array2)) {
        if (array1 === null && array2 === null) {
            if (array1.length === 0 && array2.length === 0) {
                return false;
            }
            return false;
        }
        let array3 = [];
        array1.forEach(val => {
            array3.push(val * val);
        });
        return (((array3.sort((a, b) => { return a - b })).join('|')) === (array2.sort((a, b) => { return a - b }).join('|')));
    } else {
        return false
    }
}





console.log(test());


const test = () => {
    const msee = 'budaaaaaa!'
    return msee;
}


console.log(msee);