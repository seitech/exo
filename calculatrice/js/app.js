"use strict";


/*
En tant qu'utilisateur, 
Je veux pouvoir appuyer sur les chiffres
Afin de les voir s'afficher dans l'écran
*/

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Au clic du bouton, la valeur du bouton s'affiche 
// dans la console
// 4ème étape: Récupérer mon élément écran (et regarder dans la console)
// 5ème étape: Dans mon élément écran, ajouter la valeur de mon bouton
// au texte déjà existant

function printNumber() {
    console.log(this.textContent);
    let screen = document.querySelector(".screen");
    screen.textContent += this.textContent;
}

let buttons = document.querySelectorAll(".button__number");

for(let i=0; i<buttons.length;i++) {
    buttons[i].addEventListener("click", printNumber);
}

// button3.addEventListener("click",printNumber);
/*
En tant qu'utilisateur,
Je veux pouvoir appuyer sur les symboles arithmétiques
Afin qu'ils s'affichent à l'écran

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Au clic du bouton, la valeur du bouton s'affiche 
// dans le console
// 4ème étape: Récupérer mon élément écran (et regarder dans la console)
// 5ème étape: Dans mon élément écran, ajouter la valeur de mon bouton
// au texte déjà existant


En tant qu'utilisateur,
Je veux pouvoir appuyer sur la touche AC
Afin que le calcul à l'écran se réinitialise

// 1ère étape: faire en sorte qu'on peut cliquer sur un bouton AC
// 2ème étape: Vérifier qu'au clic du bouton, il se passe bien 
// quelque chose
// 3ème étape: Récupérer l'élément écran
// 4ème étape: on vide le texte dans cet élément


En tant qu'utilisateur,
Je veux pouvoir appuyer sur une touche égale
Afin que le calcul complet s'exécute et le résultat s'affiche à l'écran

// 1ère étape: faire en sorte qu'on puisse cliquer sur un bouton =
// 2ème étape: Vérifier qu'au clic du bouton, il se passe quelque chose
// 3ème étape: Récupérer l'élément écran
// 4ème étape: On exécute le texte, et on remplace le texte précédent
// dans l'écran par le nouveau

*/