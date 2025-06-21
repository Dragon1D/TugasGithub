// menu.js

import { kalkulator } from "./Function/rumus.js";
import readline from "readline";
// Membuat interface untuk input dari terminal
const inputUser = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Minta input dari pengguna

inputUser.question("Masukkan angka pertama: ", (angka1) => {
  // tambahkan input untuk angka kedua
  inputUser.question("Masukan angka kedua: ", (angka2) => {
    // tambahkan input untuk operator(+, -, *, /)
    inputUser.question("Masukan Operator (+,-,*,/): ", (operator) => {
      // tambahkan input untuk memasukkan operator(+, -, *, /)

      console.log(
        `Hasil: ${kalkulator(
          parseFloat(angka1),

          parseFloat(angka2),

          operator
        )}`
      );

      inputUser.close();
    });
  });
});
