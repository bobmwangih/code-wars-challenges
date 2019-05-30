function odd(num) {
    if (num % 2 != 0 && num > 1) {
        var i;

        for (i = 1; i < num; i += 2) {
            var empty = "";

            function printX(val) {

                for (j = 0; j < val; j++) {
                    empty += 'x';
                }
                console.log(empty);
            }

            printX(i);
        }
        for (i === num; i > 0; i -= 2) {
            var empty = "";

            function printX(val) {

                for (j = 0; j < val; j++) {
                    empty += 'x';
                }
                console.log(empty);
            }

            printX(i);
        }
    }
}
console.log(odd(9));