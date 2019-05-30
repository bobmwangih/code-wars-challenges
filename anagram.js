function anagrams(word, words) {
let result=words.filter(neno=>{
  let sortedneno=neno.split('').sort().join('')
  let sortedWord=word.split('').sort().join('');
  return sortedneno === sortedWord;
})
return result;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
  //=> ['aabb', 'bbaa']
  