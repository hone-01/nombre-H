document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audioPlayer');
    var muteButton = document.getElementById('muteButton');
    var volumeControl = document.getElementById('volumeControl');

    // Reproducir automáticamente y en bucle
    audio.play();

    // Función para alternar entre silencio y sonido
    muteButton.addEventListener('click', function() {
        if (audio.muted) {
            audio.muted = false;
            muteButton.textContent = 'Mute';
            volumeControl.value = audio.volume; // Sincronizar la barra de volumen con el volumen actual
        } else {
            audio.muted = true;
            muteButton.textContent = 'Unmute';
            volumeControl.value = 0; // Establecer la barra de volumen en 0 cuando está silenciado
        }
    });

    // Controlar el volumen
    volumeControl.addEventListener('input', function() {
        if (audio.muted && volumeControl.value > 0) { // Si el audio está silenciado y el usuario elige un volumen diferente de 0
            audio.muted = false; // Quitar el silencio
            muteButton.textContent = 'Mute';
        }
        audio.volume = volumeControl.value;
    });
});