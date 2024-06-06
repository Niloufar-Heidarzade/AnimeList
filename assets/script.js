const container = document.querySelector(".container");
async function getLatestAnime() {
  try{
    const res = await fetch("https://api.jikan.moe/v4/seasons/now");
    const data = await res.json();
    display(data.data);
    console.log(data.data)
  }catch(er){
    console.log(er);
  }
  
}
function display(data){
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
  })
}
getLatestAnime();