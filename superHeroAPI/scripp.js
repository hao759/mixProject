const API = "https://www.superheroapi.com/api.php/1830045643997167";
const hero = document.getElementById("hero");
const getHero = document.getElementById("getHero");
var randomm = 18;

fetch(`${API}/${randomm}`)
  .then((res) => res.json())
  .then(
    (json) =>
      (hero.innerHTML = `Name: <h1 style=" white-space: nowrap;">${json.biography["full-name"]}</h1><img src="${json.image.url}"/>`)
  );

const getsuperHero = (random) => {
  console.log(`${API}/${random}`);

  fetch(`${API}/${random}`)
    .then((res) => res.json())
    .then(
      (json) =>
        (hero.innerHTML = `Name: <h1 style=" white-space: nowrap;">${json.biography["full-name"]}</h1><img src="${json.image.url}"/>`)
    );
  //.then(json =>console.log(`${json.image.url}"`));
};
getHero.onclick = () => {
  randomm = Math.floor(Math.random() * 730 + 1);
  getsuperHero(randomm);
};
