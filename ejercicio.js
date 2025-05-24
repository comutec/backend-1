// Escribe un programa que imprima la siguiente salida:
// 1 2 foo 3 4 foo 7 8 foo 10 11 foo 13 14 foo ... 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 2 === 0) {
    console.log("foo");
  }
}
