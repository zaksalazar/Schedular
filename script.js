var continerEL = docuument.querySelector(".container");
var blocks = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (var i = 0; i < blocks.length; i++) {
  var block = document.createElement("div");
  block.classList.add("block");
  block.textContent = blocks[i];
  containerEl.appendchild(block);
}
