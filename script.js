// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'timeline-button'
  const buttons = document.querySelectorAll(".timeline-button");
  // Select all elements with the class 'timeline-section'
  const sections = document.querySelectorAll(".timeline-section");
  // Create a new div element to act as the moving rectangle
  const movingRectangle = document.createElement("div");
  // Add the 'moving-rectangle' class to the new div
  movingRectangle.classList.add("moving-rectangle");
  // Append the moving rectangle to the container of the timeline buttons
  document.querySelector(".timeline-buttons").appendChild(movingRectangle);

  // Add a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the target section ID from the button's data-target attribute
      const target = button.getAttribute("data-target");

      // Toggle the visibility of the sections
      sections.forEach((section) => {
        if (section.id === target) {
          // Show the section that matches the target ID
          section.classList.add("show");
        } else {
          // Hide all other sections
          section.classList.remove("show");
        }
      });

      // Toggle the active state of the buttons
      buttons.forEach((btn) => {
        if (btn === button) {
          // Set the clicked button as active
          btn.classList.add("active");
        } else {
          // Remove the active state from all other buttons
          btn.classList.remove("active");
        }
      });

      // Move the rectangle to the clicked button's position
      const buttonRect = button.getBoundingClientRect();
      const containerRect = button.parentElement.getBoundingClientRect();
      movingRectangle.style.left = `${buttonRect.left - containerRect.left}px`;
      movingRectangle.style.width = `${buttonRect.width}px`;
    });
  });

  // Show the first section and set the first button as active by default
  sections[0].classList.add("show");
  buttons[0].classList.add("active");
  // Position the moving rectangle under the first button
  const firstButtonRect = buttons[0].getBoundingClientRect();
  const containerRect = buttons[0].parentElement.getBoundingClientRect();
  movingRectangle.style.left = `${firstButtonRect.left - containerRect.left}px`;
  movingRectangle.style.width = `${firstButtonRect.width}px`;
});
