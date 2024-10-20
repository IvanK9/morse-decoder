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
  "-----": "0",
};

function decode(expr) {
  let result = "";
  let resultArr = [];
  let letter = "";
  for (let i = 0; i < expr.length; i += 10) {
    letter = expr.substr(i, 10);
    resultArr.push(letter);
  }

  resultArr = resultArr.map((el) =>
    el.replace(/(00|10|11)/g, (match) => {
      if (match === "00") return "";
      if (match === "10") return ".";
      if (match === "11") return "-";
    })
  );

  for (let i = 0; i < resultArr.length; i += 1) {
    if (resultArr[i] === "**********") {
      result += " ";
    }
    for (let key in MORSE_TABLE) {
      if (key === resultArr[i]) {
        result += MORSE_TABLE[key];
      }
    }
  }
  return result;
}

module.exports = {
  decode,
};
