const draggable = document.getElementById("draggable");

draggable.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", draggable.id);
});

for (const dropZone of document.querySelectorAll(".drop-zone")) {
  dropZone.addEventListener("dragleave", e => {
    dropZone.classList.remove("on-dragover");
  });

  dropZone.addEventListener("dragover", e => {
    e.preventDefault();

    dropZone.classList.add("on-dragover");
  });

  dropZone.addEventListener("drop", e => {
    e.preventDefault();

    const droppedElementId = e.dataTransfer.getData("text/plain");
    const droppedElement = document.getElementById(droppedElementId);

    dropZone.appendChild(droppedElement);
    dropZone.classList.remove("on-dragover");
  });
};