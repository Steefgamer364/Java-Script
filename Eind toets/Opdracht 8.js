const arr = [];

for (let i = 0; i < 49; i++) {
  const num = Math.floor(Math.random() * 901) + 100;
  arr.push(num);
}

console.log(arr);
