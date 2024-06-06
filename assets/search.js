const container = document.querySelector(".container");
const form = document.querySelector("#searchBar");

async function getAnimeList(name) {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`);
    const data = await res.json();
    display(data.data);
  } catch (er) {
    console.error(er);
  }
}

function display(data) {
  container.innerHTML = '';
  data.forEach((anime) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("card");
    container.append(newDiv);
    const img = document.createElement("img");
    newDiv.append(img);
    img.src = anime.images.jpg.image_url;
    const newh3 = document.createElement("h3");
    newDiv.append(newh3);
    newh3.innerText = anime.title;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("animeInput").value.trim();
  if (input) {
    getAnimeList(input);
  } else {
    console.log("Please enter a valid anime name.");
  }
  form.reset();
});