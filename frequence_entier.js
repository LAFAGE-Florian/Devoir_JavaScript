import { strict as assert } from 'assert';

/** 
 * Calculer la fréquence d'un entier dans un tableau, avec différentes structures de contrôle
 */


function frequence_entier_while(tab, entier) {
    let frequence = 0;
    let indice = 0;
    while (indice < tab.length) {
        if (tab[indice] === entier) {
            frequence++;
        }
        indice++;
    }
    return frequence;
}


function frequence_entier_dowhile(tab, entier) {
    let frequence = 0;
    let indice = -1;
    do {
        indice++;
        if (tab[indice] === entier) {
            frequence++;
        }
    } while (indice < tab.length);
    return frequence;
}


function frequence_entier_for(tab, entier) {
    let frequence = 0;
    for (let indice = 0; indice < tab.length; indice++) {
        if (tab[indice] === entier) {
            frequence++;
        }
    }
    return frequence;
}


function frequence_entier_for_in(tab, entier) {
    let frequence = 0;
    for (const indice in tab) {
        if (tab[indice] === entier) {
            frequence++;
        }
    }
    return frequence;
}


function frequence_entier_for_of(tab, entier) {
    let frequence = 0;
    for (const element of tab) {
        if (element === entier) {
            frequence++;
        }
    }
    return frequence;
}



function tester_frequence(frequence_entier) {
    // Cas nominaux : La fréquence correspond
    assert.ok(frequence_entier([1, 7, 2, 4, 7, 5, 7], 7) === 3);
    assert.ok(frequence_entier([], 1) === 0);

    // Cas nominaux : La fréquence ne correspond pas
    assert.ok(! frequence_entier([1, 7, 2, 5, 7], 7) === 3);
    assert.ok(! frequence_entier([1, 9, 0, 2, 3], 7) === 1);
    assert.ok(! frequence_entier([6, 7, 4, 2, 1], -1) === 0);
    assert.ok(! frequence_entier([], 1) === 1);
}



// Tester toutes les fonctions définies
const fonctions_frequence_entier = [
    frequence_entier_while, frequence_entier_dowhile, frequence_entier_for, frequence_entier_for_in, frequence_entier_for_of
    ];

for (const frequence_entier of fonctions_frequence_entier) {
    tester_frequence(frequence_entier);
}
