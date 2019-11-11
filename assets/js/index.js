const tbody = document.querySelector("tbody");

const seconds = millis => {
  let min = Math.floor(millis / 60000);
  let sec = ((millis % 60000) / 1000).toFixed(0);
  return min + ":" + (sec < 10 ? "0" : "") + sec;
};

music.forEach(x => {
  tbody.innerHTML += `<tr><td>${music.indexOf(x)+1}<td><img src="${x.artworkUrl30}"> ${x.trackName}</td><td>${x.artistName}</td><td>${
    x.collectionName
  }</td><td>${seconds(x.trackTimeMillis)}</td><td>${x.trackPrice}$</td></tr>`;
});
