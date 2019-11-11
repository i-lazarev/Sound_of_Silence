const tbody = document.querySelector("tbody");
const names = document.querySelector("#names");
const artists = document.querySelector("#artists");
const albums = document.querySelector("#albums");

music.forEach(x => {
//   names.innerHTML += `<div>Name :${x.trackName}</div>`;
//   artists.innerHTML += `<div>${x.artistName}</div>`;
//   albums.innerHTML += `<div>${x.collectionName}</div>`;
  tbody.innerHTML += `<tr><td>${x.trackName}</td><td>${x.artistName}</td><td>${x.collectionName}</td></tr>`;
});
