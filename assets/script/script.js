'use strict';

const inputNomJoueur = document.getElementById('nom-joueur');
const btnAjout = document.getElementById('btn-ajout');
const btnValid = document.getElementById('btn-valid');
console.log(inputNomJoueur, btnAjout, btnValid);

let joueurs = [];
btnAjout.addEventListener('click', () => {
    let nomJoueurValeur = inputNomJoueur.value.toUpperCase();
    
    inputNomJoueur.value = '';
    
    if (joueurs.includes(nomJoueurValeur)){
        alert('Le nom existe déjà');

    }else{
        joueurs.push(nomJoueurValeur);
    }
    console.table(joueurs);
    

})

