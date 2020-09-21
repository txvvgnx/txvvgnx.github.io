var modal = document.getElementById('id01');
var modalContent = document.getElementById('loginform');
var loginButton = document.getElementById('ls');
loginButton.onclick = function(e) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.scroll = 'no';
}
window.onclick = async function(e) {
    if(e.target == modal) {
        modalContent.classList.add('unzoom');
        await new Promise(r => setTimeout(r, 450));
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.body.scroll = 'yes';
        modalContent.classList.remove('unzoom');
    }
}
