secret1 = "whatisu"
triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]

// Test.assertEquals(recoverSecret(triplets1), secret1)

function recoverSecret(triplets, secret) {
    var empty = [];
    for (val of triplets) {
        empty += ',' + val;

    }

    var res = empty.split(',');
    var arrar2 = [...new Set(res)];
    var sec = arrar2.join('');
    var secretWord = secret.valueOf();
    var finalWord = "";
    for (i = 0; i < secretWord.length; i++) {
        finalWord += sec.charAt(sec.search(secretWord.charAt(i)));

    }
    console.log(finalWord);
}
recoverSecret(triplets1, secret1);