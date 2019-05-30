function high(x) {
 let alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  let arrayX = x.split(" ");
  let scoreArray=[];

  for (word of arrayX) {
    let lettersArray=word.split('');
    let total=0;
    for (letter of lettersArray){
      total += alphabets.indexOf(letter)+1;
    }
    scoreArray.push(total);
  }
  return (arrayX[(scoreArray.indexOf(Math.max(...scoreArray)))]);
}
console.log(high('what time are we climbing up the volcano'));

