function pigIt(str) {
  //Code here
  let splitted = str.split(" ");
  let result = [];
  let reg=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
  splitted.map(word => {
    if (word.length >= 1 && !(reg.test(word))) {
      letters = word.split("");
      letters.push(letters.shift(), "ay");
      result.push(letters.join(""));
    } 
    else{
      result.push(word);
    }
  });
  return result.join(" ");
}

console.log(pigIt("O tempora o mores !")); //igPay atinlay siay oolcay



