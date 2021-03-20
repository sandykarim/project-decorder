// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
// caesar()
// The caesar() function in the src/caesar.js file has three parameters:

// input refers to the inputted text to be encoded or decoded.
// shift refers to how much each letter is "shifted" by. A positive number means shifting to the right 
// (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
// encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:

// If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
// Spaces should be maintained throughout, as should other non-alphabetic symbols.
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), 
// it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

// The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military 
// significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.
// For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".

// "thinkful" -> "wklqnixo"
// When decoding the message, you need to know the number the original message was shifted by so that you can shift 
// in the opposite direction.



const caesarModule = (function () {
  // you can add any code you want within this function scope
  const limit = {
    start: 'a'.charCodeAt(),
    end: 'z'.charCodeAt(),
  }
  function caesar(input, shift, encode = true) {
    // your solution code here
    if(!shift || shift < -25 || shift > 25) return false; // If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
    if(!encode) shift *= -1;

    input = input.toLowerCase(); // Capital letters can be ignored.
    return input.split("").reduce((acc, char) => { 
      const indexCode = char.charCodeAt();
      console.log('indexCode', indexCode)
      if(indexCode < limit.start || indexCode > limit.end) return acc + char; // Spaces should be maintained throughout, as should other non-alphabetic symbols.

      let shiftedAlphabet = indexCode + shift; // For example, if you were to "shift" the alphabet to the right by 3, the letter "A" would become "D".
      console.log('shiftedAlphabet line 49', shiftedAlphabet)
      if(shiftedAlphabet > limit.end) {
        shiftedAlphabet = limit.start + (shiftedAlphabet - limit.end - 1)
      } else if(shiftedAlphabet < limit.start) {
        shiftedAlphabet = limit.end - (limit.start - shiftedAlphabet - 1)
      }
      console.log('acc', acc)
      console.log('shiftedAlphabet line 56', shiftedAlphabet)
      return acc + String.fromCharCode(shiftedAlphabet);
    }, "")
  }

  return {
    caesar,
  };
})();
module.exports = caesarModule.caesar;