let links = document.querySelectorAll(".itemLinks");
let wrapper = document.querySelector("#wrapper");
let activeLink = 0;

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  link.addEventListener("click", setClickedItem);
}

links[activeLink].classList.add("active");

function setClickedItem(e) {
  removeActiveLinks();
  let clickedLink = e.target;
  changePosition(clickedLink);
}
function removeActiveLinks() {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
}
function changePosition(link) {
  let position = link.getAttribute("data-pos");
  let translateValue = `translate3d(${position}, 0px, 0)`;
  wrapper.style.transform = translateValue;
  link.classList.add("active");
}
