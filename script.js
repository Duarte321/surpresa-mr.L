function moveButton() {
    var button = document.getElementById('reject');
    var newX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    var newY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

document.getElementById('accept').onclick = function() {
    // Exibir alerta
    alert('ENFIM NOIVOS L & T!');
    
    // Redirecionar para a música no YouTube
    window.location.href = 'https://youtu.be/lBNGn_XU7Rw';
};
