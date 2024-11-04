function search() {
    const query = document.getElementById('searchInput').value;
    if (query === 'home') {
        window.location.href = 'index.html';
    } else if (query === 'canvas') {
        window.location.href = 'canvas.html';
    } else if (query==='faciliteiten') {
        window.location.href = 'faciliteiten.html' 
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});