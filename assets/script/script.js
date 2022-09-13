'use strict';

const inputNomJoueur = document.getElementById('nom-joueur');
const btnAjout = document.getElementById('btn-ajout');
const btnValid = document.getElementById('btn-valid');
const zoneResult = document.getElementById('result-zone');
const form2 = document.getElementById('form-2');
console.log(inputNomJoueur, btnAjout, btnValid,form2, zoneResult);

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

//

btnValid.addEventListener('click', () =>{

    for (let index = 0; index < joueurs.length; index++) {

        const div = document.createElement('div');
        form2.appendChild(div);

        const label = document.createElement('label');
        label.innerText = joueurs[index];
        label.setAttribute('for',`score_${joueurs[index]}`);
        div.appendChild(label);

        const inputScore = document.createElement('input');
        inputScore.setAttribute('id',`score_${joueurs[index]}`);
        inputScore.setAttribute('type', 'number');
        div.appendChild(inputScore);
                
    }
    const btnSave = document.createElement('button');
    btnSave.innerText = 'Enregister';
    form2.appendChild(btnSave);
})

