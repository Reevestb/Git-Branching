let likeEggs = window.prompt("You better like eggs bro.");
const mainTitle = document.querySelector("h1");
const mainBody = document.querySelector("body");
const subTitle = document.querySelector("h3");
if (likeEggs !== "yes") {
  mainTitle.style.color = "Red";
  subTitle.textContent = `${subTitle.textContent}, not that you'll care`;

  // mainBody.style.backgroundImage.url =
  // "https://i.etsystatic.com/18669471/r/il/07eba2/3110165164/il_1140xN.3110165164_bsab.jpg";
} else {
  mainTitle.style.color = "Yellow";
  mainTitle.textContent = "Best Egg Page";
}
