let likeEggs = window.prompt("You better like eggs bro.");
const mainTitle = document.querySelector("h1");

let subTitle = document.querySelector("h3");
let lowerImage = document.querySelector("img");
if (likeEggs !== "yes") {
  mainTitle.style.color = "red";
  subTitle.textContent = `${subTitle.textContent}, not that you care`;
  lowerImage.src =
    "https://cdn.pixabay.com/photo/2015/02/18/05/32/angry-640314_1280.jpg";
  lowerImage.width = "80vw";
} else {
  mainTitle.style.color = "yellow";
  mainTitle.textContent = "Norwich's Best Page";

}
