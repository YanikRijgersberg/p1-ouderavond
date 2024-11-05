function search() {
    const query = document.getElementById('searchInput').value;
    if (query === 'home') {
        window.location.href = 'index.html';
    } else if (query === 'canvas') {
        window.location.href = 'canvas.html';
    } else if (query==='faciliteiten') {
        window.location.href = 'faciliteiten.html' 
    } else if (query==='eduarte') {
        window.location.href = 'eduwarte.html' 
    } else if (query==='examnplan') {
        window.location.href = 'examenplan.html' 
    } else if (query==='gedragscode') { 
        window.location.href = 'Gedragscode.html' 
    } else if (query==='ministerie O&W') {
        window.location.href = 'o&m.html' 
    } else if (query==='opleidingswijzer') {
        window.location.href = 'opleidingswijzer.html' 
    } else if (query==='pamfletten') {
        window.location.href = 'pamfletten.html' 
    } else if (query==='portaal') {
        window.location.href = 'portaal.html' 
    } else if (query==='studentenstatuut') {
        window.location.href = 'studentenstatuut.html' 
    } else if (query==='veiligheid') {
        window.location.href = 'veiligheid.html' 
    } else if (query==='voorstel kobus') {
        window.location.href = 'voorstel-Kobus.html' 
    } else if (query==='voorstel Yanik') {
        window.location.href = 'voorstel-Yanik.html' 
    } else if (query==='ziekmelden') {
        window.location.href = 'ziekmelden.html' 
    }
}

document.getElementById('searchInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});