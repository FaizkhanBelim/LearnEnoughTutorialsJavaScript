import request from "request";
import Phrase from "<username>-palindrome";
let url = 'https://cdn.learnenough.com/phrases.txt'

request(url, function(error, response, body) {
  body.split("\n").forEach(function(line) {
    phrase = new Phrase(line);
    if (phrase.palindrome()) {
      console.log("palindrome detected:", line);
    }
  });
});