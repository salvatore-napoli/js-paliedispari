// Parole palindrome
var userWord = prompt('Inserisci una parola');
var palindromeResult = document.getElementById('palindrome');

if (!isNaN(userWord)) {
  alert('Non hai inserito una parola valida!');
  location.reload();
} else {
  function palindrome(word) {
    var wordLength = word.length;
    for (var i = 0; i < wordLength / 2; i++) {
      if (word.charAt(i) !== word.charAt(wordLength - 1 - i)) {
        return false;
      } else {
        return true;
      }
    }
  }

  if (palindrome(userWord)) {
    palindromeResult.innerHTML = 'La parola è palindroma.';
  } else {
    palindromeResult.innerHTML = 'La parola non è palindroma.';
  }


  // Pari o dispari
  var oddOrEven = prompt('Scegli tra pari e dispari');
  var userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
  var oddEvenElement = document.getElementById('odd-even');
  var sum = 0;
  function randomNumber() {
    var min = 1;
    var max = 5;
    var randNumb = Math.floor(Math.random() * (max + 1 - min) + min);
    return randNumb;
  }
  function evenSum(sumValue) {
    if (sumValue % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (oddOrEven !== 'pari' && oddOrEven !== 'dispari') {
    alert('Non hai scelto pari o dispari!');
    oddEvenElement.innerHTML = 'Errore nell\'esecuzione di Pari o Dispari.';
  }

  if (userNumber < 1 || userNumber > 5) {
    alert('Non hai scelto un numero tra 1 e 5!');
    oddEvenElement.innerHTML = 'Errore nell\'esecuzione di Pari o Dispari.';
  } else if (isNaN(userNumber)) {
    alert('Non hai scritto un numero!');
    oddEvenElement.innerHTML = 'Errore nell\'esecuzione di Pari o Dispari.';
  } else {
    sum = randomNumber() + userNumber;
    if (evenSum(sum) && oddOrEven === 'pari' || !evenSum(sum) && oddOrEven === 'dispari') {
      oddEvenElement.innerHTML = 'Complimenti! Il numero è ' + sum + '. Hai vinto.';
    } else {
      oddEvenElement.innerHTML = 'Spiacente. Il numero è ' + sum + '. Hai perso.';
    }
  }
}
