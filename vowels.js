function getCount(str) {
    var vowelsCount = 0;

    // enter your majic here
    var vowels = 'aeiou'
    for (i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}