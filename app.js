function search() {
    const query = document.getElementById('searchInput').value;
    if (query === 'index') {
        window.location.href = 'index.html'; // Redirect naar index.html
    } else if (query === 'canvas') {
        window.location.href = 'canvas.html'; // Redirect naar canvas.html
    } else if (query) {
        window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});