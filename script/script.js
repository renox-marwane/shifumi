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
        let humain = bouton.id;//bouton.id recupere grace a id [pierre feuille ciseau ]
        const choix=["pierre","feuille","ciseaux"];//liste des choix 
        let aleatoire =Math.random();// parcours aleatoirement un nombre entre 0 et 1 
        let nombre = Math.floor(aleatoire * choix.length );// prend l'entier 
        let robot = choix[nombre];

        console.log("j'ai jouer :" +  humain);
        console.log("Il a joué : " + robot)
        if(humain =="pierre" && robot == "ciseaux" ){
            element.gagner+=1;
             afficherVictoire.textContent = element.gagner +  "victoire"
            
        }
        else if (humain=="ciseaux" && robot == "feuille"){
            element.gagner+=1;
            afficherVictoire.textContent = element.gagner + "victoire"
            
        } else if (humain == "feuille" && robot == "pierre"){
            element.gagner+=1;
            afficherVictoire.textContent = element.gagner + "victoire"
            
        }else if (humain=="pierre" && robot == "pierre"){
            element.egalite+=1
            afficherEgalite.textContent = element.egalite + "égalité";
            
        }else if (humain=="ciseaux" && robot == "ciseaux"){
            element.egalite+=1
            afficherEgalite.textContent =element.egalite + "égalité";
            
        }else if (humain=="feuille" && robot == "feuille"){
            element.egalite+=1
            afficherEgalite.textContent = element.egalite + "égalité";
            
        }else if (humain=="pierre" && robot == "feuille"){
            element.perdu+=1
            afficherPerdu.textContent = element.perdu + "défaite";
            
        }else if (humain=="feuille" && robot == "ciseaux"){
            element.perdu+=1
            afficherPerdu.textContent = element.perdu + "défaite";
            
        }else if (humain=="ciseaux" && robot == "pierre"){
            element.perdu+=1
            afficherPerdu.textContent = element.perdu  + "défaite";
            
        }
        console.log(element.gagner + "Victoire")
        console.log(element.egalite + "égalité")
        console.log(element.perdu + "défaite" )


    })
});
