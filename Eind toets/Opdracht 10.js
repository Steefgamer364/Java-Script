const addButton = document.getElementById("add-btn");
const list = document.getElementById("list");
let count = 0;

addButton.addEventListener("click", function() {
  if (count <= 49) {
for (let count = 0; count <= 49; count++)    return;
  }
  
  count++;
  const li = document.createElement("li");
  li.textContent = "Element " + count;
  list.appendChild(li);
});

console.log("Element"+ count);