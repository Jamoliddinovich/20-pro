const play = document.querySelector('.player')
const stop = document.querySelector('.stop')
const range = document.querySelector('input')
const time = document.querySelector('.time')
const video = document.getElementById('video')
function toggleVideo() {
    if (video.paused) {
        video.play()
        play.className = 'player pause'
        play.innerHTML = ' <i class="fa fa-pause"></i>'
    } else {
        video.pause()
        play.className = 'player play'
        play.innerHTML = ' <i class="fa fa-play"></i>'
    }
}
function stopVideo() {
    video.currentTime = 0
    video.pause()
    play.className = 'player play'
    play.innerHTML = ' <i class="fa fa-play"></i>'
}
function updatetime() {
    range.value = (video.currentTime / video.duration) * 100
    let o, m, s
    if (+video.currentTime / 3600 < 10) {
        o = "0" + parseInt(video.currentTime / 3600).toString()
    } else {
        o = parseInt(video.currentTime / 3600).toString()
    }
    if (parseInt(+video.currentTime / 60)%60 < 10) {
        m = "0" +(parseInt(video.currentTime / 60)%60).toString()
    } else {
        m = (parseInt(video.currentTime / 60)%60).toString()
    }
    if (parseInt(+video.currentTime%60) < 10) {
        s = "0" + (parseInt(video.currentTime)%60).toString()
    } else {
        s = (parseInt(video.currentTime)%60).toString()
    }
    time.innerHTML = '<p>'+o+':'+m+':'+s
}
function changecurrent(){
    video.currentTime = (+range.value/100)*(+video.duration)
    updatetime()

}
video.addEventListener('dblclick',()=>{
video.requestFullscreen()
}
)
video.addEventListener('timeupdate', updatetime)
video.addEventListener('click', toggleVideo)
play.addEventListener('click', toggleVideo)
stop.addEventListener('click', stopVideo)
range.addEventListener('input',changecurrent)