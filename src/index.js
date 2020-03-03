const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let code = "",
    morz = [],
    decode = "";
  for (let i = 0; i < expr.length; i++) {
    code += expr[i];
    if ((i + 1) % 10 == 0) {
      morz.push(code);
      code = "";
    }
  }
  morz.forEach(e => {
    code = "";
    if (e[0] == "*") {
      decode+=" ";
    } else {
      for (let i = e.length - 1; i >= 0; i -= 2) {
        if (e[i] == 0 && e[i - 1] == 1) {
          code += ".";
        } else if (e[i] == 1 && e[i - 1] == 1) {
          code += "-";
        }
      }
      code=code.split('').reverse().join('')
      decode+=MORSE_TABLE[code];
    }
  });
  return decode;
}

module.exports = {
  decode
};
