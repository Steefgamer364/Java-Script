const arr = [];

for (let i = 0; i < 49; i++) {
  const num = Math.floor(Math.random() * 901) + 100;
  arr.push(num);
}

const list = document.getElementById("list");

for (let i = 0; i < arr.length; i++) {
  const li = document.createElement("li");
  li.textContent = arr[i];
  list.appendChild(li);
}
