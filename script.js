let count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count = count + 1; 
  // you can also use '+=' sign to add. it's the shorter version of writing 'count = count + 1'
  countEl.textContent = count;
  console.log("count");
}

function save() {
  let countStr = count + " , ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

