// Back end
var puzzle = function(quote) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var sentence = quote.split("");
  for (var i = 0; i < sentence.length; i++) {
    vowels.forEach(function(vowel) {
      if (sentence[i] === vowel) {
        sentence[i] = "-"
      }
    });
  }
  return sentence.join("")
}
// Front end
$(document).ready(function() {
  $("#form-one").submit(function(e) {
    e.preventDefault();
    var quote = $("input#quote").val();
    var newSentence = puzzle(quote);

    $("#puzzle").append(newSentence);
  });
});
