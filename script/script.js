// id page cass bouton  id score id gagner perdu egaux reset//
const afficherResultat = document.getElementById("score");
const afficherVictoire = document.getElementById("gagner")
const afficherEgalite = document.getElementById("egaux")
const afficherPerdu = document.getElementById("perdu")
const afficherReesayer = document.getElementById("reset")
const  boutons = document.querySelectorAll(".bouton button");
const  element = {gagner : 0,egalite : 0,perdu:0};
const score = 0;
boutons.forEach(function(bouton){
    bouton.addEventListener("click",function(){
        console.log("j'ai jouer",bouton.textContent)
    })
});

