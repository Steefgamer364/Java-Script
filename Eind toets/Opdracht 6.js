const addButton = document.getElementById("add-btn");
const list = document.getElementById("list");
let count = 0;

addButton.addEventListener("click", function() {
  if (count >= 49) {
    alert("Maximaal aantal elementen bereikt!");
    return;
  }
  
  count++;
  const li = document.createElement("li");
  li.textContent = "Element " + count;
  list.appendChild(li);
});