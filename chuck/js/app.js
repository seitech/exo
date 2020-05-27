// désolé, j'étais trop contant de réussir à battre Chuck Norris.
// merci de m'avoir mis sur la bonne voie.

function getRandomColor() {
  let b1 = document.getElementById('b1');
  let arrays = [
    "Un jour, Chuck Norris a plongé dans la Mer Rouge. Moïse en a profité pour passer.",
    "Chuck Norris ne ment jamais, c'est la vérité qui se trompe.",
    "Chuck Norris ne s'est jamais rendu à l'école. Chuck Norris ne se rend jamais.",
    "Chuck Norris a joué au roi du silence avec un muet... et il a gagné.",
    "Chuck Norris peut cultiver un champ magnétique.",
    "Chuck Norris a réussi à trouver la page 404.",
    "Chuck Norris peut faire du feu en frottant deux glaçons.",
    "Tous les soirs, les cauchemars font le même Chuck Norris.",
    "Quand Chuck Norris s’est mis au judo, David Douillet s’est mis aux pièces jaunes.",
    "Les Suisses ne sont pas neutres, ils attendent de savoir de quel côté Chuck Norris se situe.",
    "Chuck Norris est la raison pour laquelle Charlie se cache.",
    "Chuck Norris joue à la roulette russe avec un chargeur plein.",
    "Chuck Norris sait parler le braille.",
    "Chuck Norris comprend Jean-Claude Van Damme.",
    "Depuis le 11 septembre 2001 Chuck Norris ne lance plus d'avions en papier.",
    "Chuck Norris n'est pas égal à lui-même, il est meilleur.",
    "Chuck Norris a retrouvé Ornicar.",
    "Quand Chuck Norris entre dans la cuisine, Brian sort.",
    "Chuck Norris peut claquer des doigts de pied.",
    "Les ennemis de Chuck Norris lui disent souvent d'aller au diable. Le Diable aimerait bien qu'ils arrêtent.",
    "Un jour, Chuck Norris a couru si vite qu'il a failli se rentrer dedans.",
    "À son mariage, Chuck Norris avait Oncle Ben's en personne pour lui jeter du riz.",
    "Wall Street n'est que la 3ème bourse au monde, il y a d'abord les deux de Chuck Norris.",
    "Quand Chuck Norris viole la loi, elle en redemande.",
    "Selon certaines sources, il y aurait un spermatozoïde de Chuck Norris dans un lac écossais.",
    "Si Chuck Norris avait été dans « Lost », il aurait ramené l'île à la rame, jusqu'au Texas.",
    "Chuck Norris peut se souvenir du futur.",
    "Chuck Norris a piraté le Pentagone. Avec un grille-pain.",
    "Chuck Norris a gagné un tournoi de poker avec des cartes Pokémon.",
    "Chuck Norris n'a pas reçu son diplôme du bac. Les correcteurs comptent encore les points.",
    "Chuck Norris connaît la dernière décimale de Pi, et celle d'après aussi.",
    "Lorsque Chuck Norris fait l'amour à sa femme, la voisine jouit aussi.",
    "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",
    "Chuck Norris peut taguer le mur du son.",
    "Chuck Norris sera déclaré recordman du lancer de poids le jour où le poids retombera.",
    "Quand la tartine de Chuck Norris tombe, la confiture change de côté.",
    "Chuck Norris est capable de laisser un message avant le bip sonore.",
    "Un jour, Chuck Norris a fait la blague « j'ai volé ton nez » à Mickael Jackson.",
    "Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
    "Chuck Norris enfant n'envoyait pas de lettres au Père Noël. Il envoyait des ultimatums.",
    "Une larme de Chuck Norris peut guérir du cancer, malheureusement Chuck Norris ne pleure pas.",
    "Parmi les accessoires du couteau suisse de Chuck Norris, il y a Mac Gyver.",
    "Chuck Norris peut faire travailler un fonctionnaire.",
    "Un jour, Chuck Norris a perdu son alliance. Depuis, c'est le bordel dans les Terres du Milieu.",
    "Jésus Christ est né en 1940 avant Chuck Norris."
    ];
  let p2 = document.querySelector('p');

// changement de phrase
  let array = arrays[Math.floor(Math.random() * (arrays.length))];
  document.getElementById('text').textContent = array;

// changement de couleur  
  let x = [Math.floor(Math.random() * 255)];
  let y = [Math.floor(Math.random() * 255)];
  let z = [Math.floor(Math.random() * 255)];
  let color = (`rgb(${x}, ${y}, ${z})`);

  document.body.style.background = color;
  p2.style.color = color;
  b1.style.background = color;
}
// déclencheur de changement
b1.addEventListener('click', getRandomColor);