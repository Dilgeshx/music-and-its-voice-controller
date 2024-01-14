document.addEventListener('DOMContentLoaded', function () {
    var volumeControl = document.getElementById('volumeControl');
    var audioPlayer = document.getElementById('audioPlayer');

    volumeControl.addEventListener('input', function () {
        var volume = volumeControl.value;
        audioPlayer.volume = volume / 100;
    });
});
