let btnS = document.querySelector('.start');
let cont=0


btnS.addEventListener('click', function(){
    if(cont % 2 == 0){
        document.querySelector('.btnStart').style.display ="none";
        document.querySelector('audio').play();
        document.querySelector('.btnPause').style.display ="block";
    }else{
        document.querySelector('.btnPause').style.display ="none";
        document.querySelector('audio').pause();
        document.querySelector('.btnStart').style.display ="block";
    }
    cont ++;

});

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const progressBar = document.getElementById("progress-bar");
    const timeRemaining = document.getElementById("time-remaining");

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audioPlayer.addEventListener("timeupdate", function() {
        const duration = audioPlayer.duration;
        const currentTime = audioPlayer.currentTime;

        if (duration > 0) {
            const percent = (currentTime / duration) * 100;
            progressBar.style.width = percent + "%";

            const remainingTime = duration - currentTime;
            timeRemaining.textContent = formatTime(remainingTime) + " / "+ formatTime(duration);
        }
    });
});




