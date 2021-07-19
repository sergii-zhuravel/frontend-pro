// 1. Select all items
// 2. Check all elements and add event listener
// 2.a - use loop to check all elements
// 2.b - for each element addEventListener
// 2.c - function for event hanling should update the background color

// const items = document.querySelectorAll(".menuItem");

// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", onItemClicked, false);
// }

// function onItemClicked(event) {
//   this.classList.toggle("red");
// }

// document.addEventListener(
//   "mouseover",
//   (e) => {
//     //   e.stopPropagation();
//     console.log("Cicked on document capture: ", e.target);
//     const output = document.getElementById('output');
//     output.textContent = e.target.tagName;
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   (e) => console.log("Cicked on document bubbling: ", e.target),
//   false
// );

// document.body.addEventListener(
//   "click",
//   (e) => console.log("Cicked on body: ", e.target),
//   true
// );
// document.getElementById("menu").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("Cicked on ul: ", e.target);
//   },
//   true
// );
// document
//   .getElementById("item3")
//   .addEventListener(
//     "click",
//     (e) => console.log("Cicked on li: ", e.target),
//     true
//   );


document.getElementById('menu').addEventListener('click', onMenuClickHandler);

function onMenuClickHandler(event) {
    if (event.target.tagName == "LI") {
        console.log("clicked", `Element ${event.target.textContent} was clicked`);
    }
}