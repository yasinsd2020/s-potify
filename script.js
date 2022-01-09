
// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.querySelector('.music-seek-bar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
const songimg = document.querySelector('.img');
let artist = document.querySelector("#artist");
let seekb = document.querySelector(".progress");
let currenttime = document.querySelector(".current_time");
let total_duration = document.querySelector(".duration");
let open = document.querySelector("#open");
let bottom = document.querySelector(".bottom");
let progd = document.querySelector(".progress_div");
let para =document.querySelector(".para");
let songItems = Array.from(document.getElementsByClassName('songItem'));
  
// Aray section  data store in array [object{}]
let songs = [
    { songName: "Believe", artist: "Emiway-Bantai", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "3:59 AM", artist: "Divine", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "ghana kasuta", artist: "Raftar", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Snake", artist: "Mc-stan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Wishlist", artist: "Dion James", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Roll up", artist: "Kri$na", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Tu ake dekhle" , artist:"King" , filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "shukriya", artist:  "Emiway-Bantai", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "My Time", artist: "Emiway-Bantai", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Machainge-3", artist: "Emway-Bantai", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]

// gallery image and teXt calling  in the form array by foreachloop

Array.from(document.getElementsByClassName('boX1')).forEach((element,i) =>{  
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("a1")[0].innerText = songs[i].artist;

})

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songimg.classList.add('img2');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songimg.classList.remove('img2');
        gif.style.opacity = 0;
        makeAllPlays();


    }
})


// small play / pause button fun

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// small all buttton  play/pause ,song name ,song image ,artist name, gif section master play/pause section......./


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.pause() || audioElement.currentTime <= 0) {
            
            audioElement.play();
            makeAllPlays();  
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            artist.innerText = songs[songIndex].artist;
            songimg.src = `covers/${songIndex + 1}.jpg`;
            songimg.classList.add('img2');
            audioElement.currentTime=0;
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            audioElement.play();

        }else{

            makeAllPlays(); 
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            audioElement.pause();
            masterSongName.innerText = songs[songIndex].songName;
            artist.innerText = songs[songIndex].artist;
            songimg.src = `covers/${songIndex + 1}.jpg`;
            
          
    
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        songimg.classList.remove('img2');
        gif.style.opacity = 0;

        }
    }
    )

})




// neXt song  sectin 

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    artist.innerText = songs[songIndex].artist;
    songimg.src = `covers/${songIndex + 1}.jpg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songimg.classList.add('img2');
    gif.style.opacity = 1;


})

// song ended and neXt play section..

audioElement.addEventListener("ended",()=>{
   
        if (songIndex >= 9) {
            songIndex = 0
        }
        else {
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        artist.innerText = songs[songIndex].artist;
        songimg.src = `covers/${songIndex + 1}.jpg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        songimg.classList.add('img2');
        gif.style.opacity = 1;
      
    
  
})

// previuos song play section

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    artist.innerText = songs[songIndex].artist;
    songimg.src = `covers/${songIndex + 1}.jpg`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    songimg.classList.add('img2');
    gif.style.opacity = 1;
})




// progress audio calcultaio section

audioElement.addEventListener('timeupdate', (e) => {
    const curentT = e.target.currentTime;
    const durat = e.target.duration;
    let progress = (audioElement.currentTime / audioElement.duration) * 100;


    seekb.style.width = `${progress}%`;


    // total duration
    let m = Math.floor(durat / 60);
    let s = Math.floor(durat % 60);

    let tot_duration = `${m}:${s}`;
    if (durat) {
        total_duration.textContent = `${tot_duration}`;
    }

    // current duration
    let mint = Math.floor(curentT / 60);
    let sec = Math.floor(curentT % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    currenttime.textContent = `${mint}:${sec}`;


});

//    PROGRESS BAR handling

progd.addEventListener('click', (e) => {

    audioElement.currentTime = (e.offsetX / progd.clientWidth) * audioElement.duration;
    audioElement.play();
})





// active class toggle for maXmis and minimize section

open.addEventListener("click", () => {
    bottom.classList.toggle("active");
})
