var audioFiles = ['ym_hello.mp3', 'ym_hi-there.mp3', 'ym_hi.mp3'];
var currentIndex = 0; // Índice del archivo de audio actual

function reproducirSonido() {
    var audioFile = audioFiles[currentIndex];
    var audio = new Audio("static/media/voice/"+audioFile);
    audio.volume = 0.1;
    audio.play();
    
    // Incrementa el índice para la próxima reproducción
    currentIndex++;
    if (currentIndex >= audioFiles.length) {
        currentIndex = 0; // Vuelve al principio si se alcanza el final de la lista
    }
}
