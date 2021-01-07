// Parole palindrome
var userWord = prompt('Inserisci una parola.');
var palindromeResult = document.getElementById('palindrome');

function palindrome(word) {
  var wordLength = word.length;
  for (var i = 0; i < wordLength / 2; i++) {
    if (word.charAt(i) !== word.charAt (wordLength - 1 - i)) {
      return false;
    } else {
      return true;
    }
  }
}

if (palindrome(userWord)) {
  palindromeResult.innerHTML = 'La parola è palindroma!';
} else {
  palindromeResult.innerHTML = 'La parola non è palindroma.';
}


//
