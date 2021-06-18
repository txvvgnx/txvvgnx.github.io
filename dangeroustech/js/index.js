var cheat = document.getElementById('cheatname');

var typewriter = new Typewriter(cheat, {
    loop: true
});

typewriter.callFunction(changeToOnetap, "");
typewriter.typeString('onetap.com');
typewriter.pauseFor(3000);
typewriter.deleteAll()

typewriter.callFunction(changeToNeverlose, "");
typewriter.typeString('neverlose.cc')
typewriter.pauseFor(3000)
typewriter.deleteAll(); 

typewriter.callFunction(changeToGamesense, "");
typewriter.typeString('gamesense.pub')
typewriter.pauseFor(3000)
typewriter.start();

function changeToOnetap() {    
    cheat.classList.remove('gamesense');  
    cheat.classList.add('onetap');
}

function changeToNeverlose() {
    cheat.classList.remove('onetap');
    cheat.classList.add('neverlose');
}

function changeToGamesense() {
    cheat.classList.remove('neverlose');
    cheat.classList.add('gamesense');
}

var purchase = document.getElementById('purchase');
var discord = document.getElementById('discord');

purchase.onclick = function(e) {
    window.open("https://shoppy.gg/@domcsy");
}

discord.onclick = function(e) {
    window.open('https://discord.gg/393WMDcsxp');
}
