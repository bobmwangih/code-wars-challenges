function createPhoneNumber(numbers) {
    var digits = numbers.join("");
    // console.log(digits);
    console.log('(' + digits.substring(0, 3) + ')' + digits.substring(3, 6) + '-' + digits.substring(6));
}
createPhoneNumber([2,5,4,7,0,2,3,1,9,2,4,5]);


///second approach

function converter(digitz) {
    var styleYaMajuu = '(xxx)xxx-xxx-xxx';
    for (kinamba of digitz) {
        styleYaMajuu = styleYaMajuu.replace('x', kinamba);
    }
    console.log(styleYaMajuu);
}
converter([2,5,4,7,0,2,3,1,9,2,4,5]);





class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return this.height * this.width;
    }

}
