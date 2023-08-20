let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');

let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Justin beiber-Let me Love You", filepath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "The Weeknd-Starboy", filepath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "XXX-Tentacion-Moonlight", filepath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Maroon 5-One More Night", filepath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Lil Nas X-Old Town Road", filepath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Adam levine-Stereo Hearts", filepath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Rody-Ricch-The Box", filepath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "NF- The Search", filepath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Juice Wrld-Lucid Dreams", filepath: "songs/9.mp3", coverPath: "covers/9.jpg" },
]

songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = parseInt((myProgressBar.value * audioElement.duration) / 100);
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = i;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[i].filepath;
        masterSongName.innerText=songs[songIndex].songName;
        gif.style.opacity = 1;
        // audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.add('fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 9) {
        songIndex = 0;
    } else {
        songIndex+=1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
});
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex=0;
    } else {
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].filepath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
});
