class Sos {
  constructor() {
     this.tbody = document.querySelector("tbody");
     this.search = document.querySelector("#search");
     this.init();
     this.musicObj = [];
     this.searchText = "Sound of silence"
    
  }

  seconds = millis => {
    let min = Math.floor(millis / 60000);
    let sec = ((millis % 60000) / 1000).toFixed(0);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  };

  listSongs = songs => {
    this.tbody.innerHTML = "";
    songs.forEach(song => {
      this.tbody.innerHTML += `<tr><td>${songs.indexOf(song) + 1}<td><img src="${
        song.artworkUrl30
      }"> ${song.trackName}</td><td>${song.artistName}</td><td>${
        song.collectionName
      }</td><td>${this.seconds(song.trackTimeMillis)}</td><td>${
        song.trackPrice
      }$</td></tr>`;
    });
  };

  eventListner(){
    this.search.addEventListener("keyup", x => {
        const keyword = x.target.value.toLocaleLowerCase();
        const searchMusic = this.musicObj.filter(
          song =>
            song.artistName.toLocaleLowerCase().includes(keyword) ||
            song.trackName.toLocaleLowerCase().includes(keyword)
        );
        if (searchMusic.length === 0) {
          this.tbody.innerHTML = "<p>Not found</p>";
          return;
        }
        this.listSongs(searchMusic);
      });
  }

 

  async init (){
    const req = fetch(
        `https://search-itunes.now.sh/?term=${this.searchText}&media=music`
      );
    console.log(req)
    req.then(res=>res.json()).then(data=>{
        this.musicObj = data.results
    console.log(this.musicObj);
    this.listSongs(this.musicObj);
    this.eventListner();
    })
    
  };



}
const mySos = new Sos();