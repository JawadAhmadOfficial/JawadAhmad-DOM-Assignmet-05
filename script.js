// ===============================
// Task 1: Button Click Event
// Shows an alert when button is clicked
// ===============================
document.getElementById("clickBtn").addEventListener("click", function () {
  alert("Button Clicked Successfully");
});

// ===============================
// Task 2: Change Paragraph Text
// Updates text content on button click
// ===============================
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("textPara").textContent = "Text Updated Successfully";
});

// ===============================
// Task 3: Change Background Color
// Uses class toggle (best practice)
// ===============================
document.getElementById("bgBtn").addEventListener("click", function () {
  document.body.classList.toggle("bg-changed");
});

// ===============================
// Task 4: Input Event (Live Typing)
// Displays user input in real time
// ===============================
document.getElementById("liveInput").addEventListener("input", function (e) {
  document.getElementById("liveText").textContent = e.target.value;
});

// ===============================
// Task 5: Mouse Enter & Leave
// Changes box color on hover
// ===============================
const box = document.getElementById("hoverBox");

box.addEventListener("mouseenter", function () {
  box.style.backgroundColor = "#a5f3a1";
});

box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "#ecf0f1";
});

// ===============================
// Task 6: Double Click Event
// Detects double click action
// ===============================
document
  .getElementById("dblClickBtn")
  .addEventListener("dblclick", function () {
    alert("Double Click Detected");
  });
