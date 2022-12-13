function isPalindrome(word) {

  const arrayOfLetters = word.split('');
  const reverseLetters = arrayOfLetters.reverse()
  const reverseString = reverseLetters.join('')

  if (word == reverseString) {
    return true
  } else {
    return false
  }
}

//Pseudo code

@@ -13,6 +23,12 @@ function isPalindrome(word) {}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log('Expecting: false')
  console.log('=>', isPalindrome('girl'));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("tonia"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
