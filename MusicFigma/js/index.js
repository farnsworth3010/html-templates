let audio_player = document.getElementById("audio-player")
let trackEl = document.getElementsByClassName("audio-player__track")
let cover = document.getElementById("audio-player__tracklist-cover")

audio_player.play()

let tracks = ["0.mp3", "1.mp3","2.mp3", "3.mp3", "4.mp3", "5.mp3"]
function playTrack(id){
    audio_player.src = "./media/audio/"+tracks[id]
    audio_player.play()
    for(let x of trackEl){
        x.classList.remove("audio-player__track_active")
    }
    trackEl[id].classList.add("audio-player__track_active") 
    
}

let timer = setInterval(()=>{
    if(audio_player.paused){
        cover.classList.remove("audio-player__tracklist-cover_active")
    }
    else{
        cover.classList.add("audio-player__tracklist-cover_active")   
    }
} ,100)