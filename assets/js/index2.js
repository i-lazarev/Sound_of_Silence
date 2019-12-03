// const tbody = document.querySelector("tbody");
// const search = document.querySelector("#search");

// const init = async()=>{

//   //fetch
  
//   const req = fetch("https://search-itunes.now.sh/?term=Sound%20of%20Silence")
//   const res = await req;
//   const musicObj = await res.json();
//   console.log(musicObj)
//     listSongs(musicObj.results);
//   }
//   init()
// const results = init().results
// console.log(results)


// const seconds = millis => {
//   let min = Math.floor(millis / 60000);
//   let sec = ((millis % 60000) / 1000).toFixed(0);
//   return min + ":" + (sec < 10 ? "0" : "") + sec;
// };


// const listSongs = songs => {
//   tbody.innerHTML = "";
//   songs.forEach(song => {
//     tbody.innerHTML += `<tr><td>${songs.indexOf(song) + 1}<td><img src="${
//       song.artworkUrl30
//     }"> ${song.trackName}</td><td>${song.artistName}</td><td>${
//       song.collectionName
//     }</td><td>${seconds(song.trackTimeMillis)}</td><td>${
//       song.trackPrice
//     }$</td></tr>`;
//   });
// };

// search.addEventListener("keyup", x => {
//   const keyword = x.target.value.toLocaleLowerCase();
//   const searchMusic = musicObj.filter(
//     song =>
//       song.artistName.toLocaleLowerCase().includes(keyword) ||
//       song.trackName.toLocaleLowerCase().includes(keyword)
//   );
//   if (searchMusic.length === 0) {
//     tbody.innerHTML = "<p>Not found</p>";
//     return;
//   }
//   listSongs(searchMusic);
// });


//window.addEventListener("load",init)
