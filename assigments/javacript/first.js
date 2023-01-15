function isPalindrome(x) {
    var xString = x.toString();
    var xStringReverse = xString.split('').reverse().join('');
    if (xString === xStringReverse) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
isPalindrome("121")