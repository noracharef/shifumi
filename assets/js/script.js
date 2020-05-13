// Création des variables contenant les éléments à manipuler afin de nous empêcher d'avoir à tout retaper à chaque fois.
var appearFirst = document.getElementById('appearFirst');
var appearSecond = document.getElementById('appearSecond');
var appearThird = document.getElementById('appearThird');
// Création d'un tableau contenant toutes les variables ci-dessus pour faciliter leur utilisation future.
var appearTable = [appearFirst, appearSecond, appearThird];

// Pour chaque élément du tableau, je définis l'opacité à 0 au chargement de la page afin que mes éléments soient tous invisibles.
appearTable.forEach(element => {
    element.style.opacity = 0;
});

// Ici on va écouter le défilement de la fenêtre.
window.addEventListener('scroll', function () {

    // On récupère alors la valeur du défilement vertical afin de la réutiliser plus tard dans une variable nommée scrollValue.
    var scrollValue = window.scrollY;
    // Ce console.log permet de vérifier le contenu de scrollValue et donc de connaître la valuer du défilement vertical actuel.
    // A noter que cette ligne n'est pas vitale pour le résultat, elle sert uniquement à se repérer sur la page afin d'établir les futures apparitions des éléments.
    console.log(scrollValue);

    // Si la valeur du défilement vertical est supérieure à 500
    if (scrollValue > 500) {

        // Je règle l'opacité de chacun de mes éléments sur 1 afin de les rendre visible.
        appearTable.forEach(element => {
            element.style.opacity = 1;
        });

        // BONUS
        // Cette partie sert à ajouter une animation d'arrivée sur les éléments.
        // Le premier paramètre à l'intérieur des quotes correspond à la propriété sur laquelle la transition doit être effectuée.
        // Le second paramètre correspond à la durée de cette transition.
        // Le troisième paramètre correspond au délais à appliquer avant que la transition ne se lance, cet effet permet de créerun léger décalage entre chaque apparition
        appearFirst.style.transition = 'opacity 1s';
        appearSecond.style.transition = 'opacity 1s 0.5s';
        appearThird.style.transition = 'opacity 2s 1s';

    // Si la valeur du défilement vertical est inférieure ou égale à 500
    } else {

        // Pour chaque élément, je règle l'opacité sur 0 afin qu'ils disparaissent.
        // A noter que la transition s'applique également lorsque les éléments disparaissent
        appearTable.forEach(element => {
            element.style.opacity = 0;
        });

    }
})