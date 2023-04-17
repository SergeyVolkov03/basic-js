const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alfabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    if (this.reverse) {
      for (let i = 0, j = 0; i < text.length; i++, j++) {
        if (j === key.length) {
          j = 0;
        }

        if (text[i] === " ") {
          result += " ";
          j--;
        } else if (this.alfabet.indexOf(text[i].toUpperCase()) === -1) {
          result += `${text[i]}`;
        } else {
          let index =
            this.alfabet.indexOf(text[i].toUpperCase()) +
            this.alfabet.indexOf(key[j].toUpperCase());
          if (index >= this.alfabet.length) {
            index = index - this.alfabet.length;
          }
          result = `${result}${this.alfabet[index]}`;
        }
      }
    } else {
      for (let i = 0, j = 0; i < text.length; i++, j++) {
        if (j === key.length) {
          j = 0;
        }

        if (text[i] === " ") {
          result = ` ${result}`;
          j--;
        } else if (this.alfabet.indexOf(text[i].toUpperCase()) === -1) {
          result = `${text[i]}${result}`;
        } else {
          let index =
            this.alfabet.indexOf(text[i].toUpperCase()) +
            this.alfabet.indexOf(key[j].toUpperCase());
          if (index >= this.alfabet.length) {
            index = index - this.alfabet.length;
          }
          result = `${this.alfabet[index]}${result}`;
        }
      }
    }
    return result;
  }

  decrypt(text, key) {
    if (!text || !key || !arguments) {
      throw new Error("Incorrect arguments!");
    }
    let result = "";
    if (this.reverse) {
      for (let i = 0, j = 0; i < text.length; i++, j++) {
        if (j === key.length) {
          j = 0;
        }

        if (text[i] === " ") {
          result += " ";
          j--;
        } else if (this.alfabet.indexOf(text[i].toUpperCase()) === -1) {
          result += `${text[i]}`;
        } else {
          let index =
            this.alfabet.indexOf(text[i].toUpperCase()) -
            this.alfabet.indexOf(key[j].toUpperCase());
          if (index < 0) {
            index = index + this.alfabet.length;
          }
          result = `${result}${this.alfabet[index]}`;
        }
      }
    } else {
      for (let i = 0, j = 0; i < text.length; i++, j++) {
        if (j === key.length) {
          j = 0;
        }

        if (text[i] === " ") {
          result = ` ${result}`;
          j--;
        } else if (this.alfabet.indexOf(text[i].toUpperCase()) === -1) {
          result = `${text[i]}${result}`;
        } else {
          let index =
            this.alfabet.indexOf(text[i].toUpperCase()) -
            this.alfabet.indexOf(key[j].toUpperCase());
          if (index < 0) {
            index = index + this.alfabet.length;
          }
          result = `${this.alfabet[index]}${result}`;
        }
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
