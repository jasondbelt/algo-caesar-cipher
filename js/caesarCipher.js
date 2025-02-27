function shiftLetter(letter, shiftAmount){
  // assign a unicode value equal to sum of (unicode number of letter + shift amount) 
  let unicode = letter.charCodeAt(0) + shiftAmount;
  
  // add 26 to unicode if it drops below the unicode value for 'a' or 'A' 
  if ((letter == letter.toLowerCase() && unicode < 97) || (letter == letter.toUpperCase()) && unicode < 65){
    unicode += 26;
  } 
  // subtract 26 from unicode if it exceeds the unicode value for 'z' or 'Z' 
  else if ((letter == letter.toLowerCase() && unicode > 122) || (letter == letter.toUpperCase()) && unicode > 90){
    unicode -= 26;
  } 

  // return the shifted letter
  return String.fromCharCode(unicode);
}

function caesarCipher(string, shiftAmount){
  // regEx expression containing alphabetical letters
  let isAlphabetic = /[A-Za-z]/;
   // converts string to an array to use map method on each character...
  let result = string.split('');
  
  // calls shiftLetter function on each character if it's a letter, and doesn't do anything to the rest. Then uses join method to convert it back to string.
  return result.map(i => isAlphabetic.test(i) ? shiftLetter(i, shiftAmount) : i).join('');
}

console.log(caesarCipher("Boy! What a string!", -5) === "Wjt! Rcvo v nomdib!")
console.log(caesarCipher("Hello zach168! Yes here.", 5) === "Mjqqt efhm168! Djx mjwj.")
console.log(caesarCipher("Hello Zach168! Yes here.", -5) === "Czggj Uvxc168! Tzn czmz.")

// exports.caesarCipher = function() {
//   shiftLetter
// };


