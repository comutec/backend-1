let num = 1;
const num2 = 2;

if ("1" === 1) {
  num = 3;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}

function test() {
  let num = 4;
  return num;
  console.log(num);
}

test();

const obj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

console.log(obj.name);
console.log(obj.age);
obj.greet();

const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
