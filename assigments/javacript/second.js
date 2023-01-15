function lengthOfLastWord(s) {
    var sArray = s.split(' ');
    var lastWord = sArray[sArray.length - 1];
    console.log(lastWord.length);
}
lengthOfLastWord("Full Stack")