'use strict';

const inputNomJoueur = document.getElementById('nom-joueur');
const btnAjout = document.getElementById('btn-ajout');
const btnValid = document.getElementById('btn-valid');
const zoneResult = document.getElementById('result-zone');
const form2 = document.getElementById('form-2');
const form1 = document.getElementById('form-1');

console.log(inputNomJoueur, btnAjout, btnValid, form2, zoneResult);

// Les tableaux de joueurs et de scores
let joueurs = [];
let scoreJoueur = [];

// Encodage des joueurs
btnAjout.addEventListener('click', () => {
    let nomJoueurValeur = inputNomJoueur.value.toUpperCase();

    inputNomJoueur.value = '';

    if (joueurs.includes(nomJoueurValeur)) {
        alert('Le nom existe déjà');

    } else {
        joueurs.push(nomJoueurValeur);
        scoreJoueur.push(0);
    }
    console.table(joueurs);
    console.table(scoreJoueur);
});



// Génération du formulaire de score
btnValid.addEventListener('click', () => {

    form1.classList.add('hidden');

    let count = 1;
    const NomMatch = document.createElement('h3');
    form2.appendChild(NomMatch);
    NomMatch.innerText = `Match n° ${count}`;

    for (let index = 0; index < joueurs.length; index++) {

        const div = document.createElement('div');
        form2.appendChild(div);

        const label = document.createElement('label');
        label.innerText = joueurs[index];
        label.setAttribute('for', `score_${joueurs[index]}`);
        div.appendChild(label);

        const inputScore = document.createElement('input');
        inputScore.setAttribute('id', `score_${joueurs[index]}`);
        inputScore.setAttribute('type', 'number');
        div.appendChild(inputScore);

    }

    const btnSave = document.createElement('button');
    btnSave.innerText = 'Enregister';
    form2.appendChild(btnSave);

    // Sauvegarde des score
    btnSave.addEventListener('click', () => {
        for (let k = 0; k < joueurs.length; k++) {

            const inputScore = document.getElementById(`score_${joueurs[k]}`);
            const score = parseInt(inputScore.value);
            // console.log(inputScore);

            inputScore.value = '';

            // Ajout le score dans le tableau des scores 
            scoreJoueur[k] += score;  // scoreJoueur[k] = scoreJoueur[k] + score
        }
        console.table(scoreJoueur);
        count++;

        NomMatch.innerText = `Match n° ${count}`;
    });
})
//


