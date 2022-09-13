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


    btnSave.addEventListener('click', () => {
        // Sauvegarde des score
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

        // Passer à l'ecran de resultat
        if (count > 3) {
            // Formulaire des scores masqué !
            form2.classList.add('hidden');

            // Trouvé la valeur la plus faible → « Winner » 
            // - Initialisation du meilleur score (premier joureur)
            let lowerScrore = scoreJoueur[0];

            // - Comparaison avec les autres scores
            for (let y = 1; y < scoreJoueur.length; y++) {
                if(lowerScrore > scoreJoueur[y]) {
                    lowerScrore = scoreJoueur[y];
                }
            }

            // Trouvé les indexes des joueurs qui ont le score le plus faible
            let winners = [];

            for(let x = 0; x < scoreJoueur.length; x++) {

                if(lowerScrore === scoreJoueur[x]) {
                    winners.push(x);
                }
            }
            console.log('Winners', winners);


            // Affichage du resultat
            const titleResult = document.createElement('h3');
            zoneResult.appendChild(titleResult);

            if(winners.length === 1) {
                const index = winners[0];
                const winner = joueurs[index];

                titleResult.innerText = `Le gagnant est ${winner} avec un score de ${lowerScrore}`
            }
            else {
                titleResult.innerText = `Meilleur score ${lowerScrore}. Liste des gagnants : `;

                for(const indiceWinner of winners) {

                    const winner = joueurs[indiceWinner];
                
                    const baliseResult = document.createElement('p');
                    baliseResult.innerText = winner;
                    zoneResult.appendChild(baliseResult); 
                }
            }
        }
    });
})
//


