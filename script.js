//your code here
// Get all the div elements
const divs = document.querySelectorAll('[id^="div"]');

// Add event listeners to each div
divs.forEach((div) => {
  div.addEventListener('dragstart', (e) => {
    // Set the data transfer effect
    e.dataTransfer.effectAllowed = 'move';
    // Set the data transfer type
    e.dataTransfer.setData('text', div.id);
  });

  div.addEventListener('dragover', (e) => {
    // Prevent the default behavior
    e.preventDefault();
  });

  div.addEventListener('drop', (e) => {
    // Get the id of the dragged element
    const draggedId = e.dataTransfer.getData('text');
    // Get the dragged element
    const draggedDiv = document.getElementById(draggedId);
    // Swap the background images
    const temp = div.style.backgroundImage;
    div.style.backgroundImage = draggedDiv.style.backgroundImage;
    draggedDiv.style.backgroundImage = temp;
  });

  div.addEventListener('dragend', () => {
    // Reset the drag effect
    div.style.opacity = 1;
  });
});