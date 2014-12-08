// describe("vigenere", function() {
//   describe("#encode", function() {
//     it("encodes the message hello with keyword banana", function() {
//       expect(vigenere.encode("attackatdawn", "lemon")).toEqual("lxfopvefrnhr");
//     });
//     it("encodes a message", function() {
//       expect(vigenere.encode("thesecretkey", "bobandalice")).toEqual("uvfsrfrpbmiz");
//     });
//   })
//   // describe("#decode", function() {
//   //   it("decodes the message doageaus with keyword banana", function() {
//   //     expect(vigenere.decode("oypvvvmutsowryfjdytekgrev", "supersecretsauce")).toEqual("wearediscoveredfleeatonce");
//   //   });
//   //   it("decodes the message doageaus with keyword banana", function() {
//   //     expect(vigenere.decode("fhwnxlhwv", "startedfromthebottom")).toEqual("nowwehere");
//   //   });
//   // })
// });

var vigenere = {};
var helper = {};

vigenere.encode = function(message, keyword) {
  var alphabet = helper.alphabet();
  var customKey = helper.keywordResize(message, keyword);
  var splitMsg = message.split("");

  var encodedLetters = splitMsg.map(function(element, index){
    var msgLetterPosition = alphabet.indexOf(element); // finds the index of each letter in the message
    // finds the index of each letter in the customKey
    var keywordLetterPosition = alphabet.indexOf(customKey[index]);
    // adds the index of message & customKey index together and 'circles' back if greater than alphabet
    var encodedLetterPosition = msgLetterPosition + keywordLetterPosition;
    if(encodedLetterPosition > alphabet.length) encodedLetterPosition -= alphabet.length;
    // returns the new encoded letter
    return alphabet[encodedLetterPosition];
    // joins the array of encoded letters back together
  })

  return encodedLetters.join("");

}

vigenere.decode = function(message, keyword) {
  //var declaration
  var alphabet = helper.alphabet();
  var customKey = helper.keywordResize(message, keyword);
  var splitMsg = message.split("");
  //mapping decoded message
  var decodedLetters = splitMsg.map(function(element, index){
    var letterIndex = alphabet.indexOf(element) - alphabet.indexOf(customKey[index]);
    if(letterIndex < 0) letterIndex += alphabet.length;
    return alphabet[letterIndex];
  });
  return decodedLetters.join("");
}

//Adjusts the side of the keyword to match the size of the message
helper.keywordResize = function(message, keyword) {
  var result = "";
  var splitMsg = keyword.split("");
  for (var i = 0; i < message.length; i++ ) {
    var position = i % keyword.length;
    result += splitMsg[position];
  }
  return result;
}

// Returns the alphabet as an array
helper.alphabet = function(){
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.split("")
  return alphabet;
}