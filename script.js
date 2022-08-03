console.log("Welcome to");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Song1", filepath: "song1.mp3", coverPath: "covers1.jpg"},
    {songName: "Song2", filepath: "song2.mp3", coverPath: "covers2.jpg"},
    {songName: "Song3", filepath: "song3.mp3", coverPath: "covers3.jpg"},
    {songName: "Song4", filepath: "song4.mp3", coverPath: "covers4.jpg"},
    {songName: "Song5", filepath: "song5.mp3", coverPath: "covers5.jpg"},
    {songName: "Song6", filepath: "song6.mp3", coverPath: "covers6.jpg"},
]

songItems.forWach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songnamebo")[0].innerText = songs[i].songName;
})

//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//listento events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myProgressBar.value = progress;

});
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        
        
        element.target.classList.remove('fa-circle-pause');
        element.target.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName(" songitemplay")).forEach((element)=>(
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllplays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement src = 'songs/3.mp3';
        
    })

})