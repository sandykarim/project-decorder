// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// - input refers to the inputted text to be encoded or decoded.
// - encode refers to whether you should encode or decode the message. By default it is set to true.

// You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
// 1. When encoding, your output should still be a string.
// 2. When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
//  2a. Spaces should be maintained throughout.
//  2b. Capital letters can be ignored.
// 3. The letters "I" and "J" share a space. 
//  3a. When encoding, both letters can be converted to 42,
//  3b. but when decoding, both letters should somehow be shown.

// Examples: 
// polybius("thinkful"); //> "4432423352125413"
// polybius("Hello world"); //> '3251131343 2543241341'

// polybius("3251131343 2543241341", false); //> "hello world"
// polybius("4432423352125413", false); //> "th(i/j)nkful
// polybius("44324233521254134", false); //> false

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",}

  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  function polybius(input, encode = true) {
    // your solution code here
    // const alphabet = "abcdefgh(i/j)klmnopqrstuvwxyz"; 
    // let row = 1, column = 1;
    // const polybiusCipher = {} 
    // console.log('hey', alphabet)   

    // for (let i = 0; i < alphabet.length; i++){
    //   if (column == 5) { 
    //     column = 1;
    //     row+=1;
    //   }
    // }
    input = input.toLowerCase(); // Capital letters can be ignored.
    let splitString;
    let key = encodeKey; // store encoded key object as our key when true
    if(encode) {  // 1. When encoding, your output should still be a string.
      splitString = input.split("");
    } else {
      key = decodeKey; // store decoded key object as our key when false
      splitString = input.split(" "); // 2. When decoding, the number of characters in the string excluding spaces should be even. 

      const odd = splitString.reduce((acc, array) => acc + array.length, 0) % 2;
      if(odd) return false // Otherwise, return false bc it's odd

      splitString = splitString.map(section => { // 2a. Spaces should be maintained throughout.
        return section.split("").reduce((acc, space, index, collect) => { //  2a. Spaces should be maintained throughout.
          if(space === " ") { // 2a. Spaces should be maintained throughout.
            acc.push(" "); // 2a. Spaces should be maintained throughout.
          } else if(!(index % 2)) {
            acc.push(space + collect[index + 1]);
          }
          return acc;
        }, [])
      })
      .reduce((a, b) => a.concat(" ", b));
    }
    return splitString.map(space => key[space] || " ").join("");
  }

  return {
    polybius,
  };
})();
module.exports = polybiusModule.polybius;