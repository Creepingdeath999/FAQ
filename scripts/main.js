const ul = document.querySelector("ul");
ul.addEventListener("click", (event) => {
  const h2 = event.target;
  if (h2.classList[0] === "question") {
    hide();
    h2.nextElementSibling.classList.toggle("visible");
    console.log(h2.nextElementSibling);
  }
});
function hide() {
  ul.querySelectorAll("h2").forEach((e) => {
    
    e.nextElementSibling.classList.remove("visible");
  });
}
