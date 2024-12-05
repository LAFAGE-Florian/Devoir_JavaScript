const fs = require('fs');
// syntaxe ES6 : import fs from'fs';
const filename = 'books.json';
const books = JSON.parse(fs.readFileSync(filename,'utf8'));
// console.log(books);


// Obtenir le nombre de livres de plus de 800 pages

const b800 = books.filter(book => book.pageCount > 800)
// console.log("Nombre de livres de plus de 800 pages :", b800.length)


// Obtenir le titre des livres de plus de 800 pages

const titre800 = b800.map(book => book.title) 
// console.log("Titre des livres de plus de 800 pages : ")
for (const indice of titre800) {
    // console.log(` - ${indice} `)
}
// console.log(book.Titles.map(t => '/n - ' + t)).join())
// Obtenir le nombre de livre de la catégorie Internet

const books_minuscule = books.map(book => book.categories.map(categories => categories.toLowerCase())) ;
//console.log(books_minuscule)
const internet = books_minuscule.filter(categories => categories.includes(("internet")));
//console.log("Nombre de livre de la catégorie Internet :", internet.length);
//console.log(internet)

// obtenir le nombre total de page de la catégorie Internet

const pagesInternet = books
        .filter(book => book.categories.map(categorie => categorie.toLowerCase()).includes("internet"))
        .map(book => book.pageCount)
        .reduce((somme, pageCount) => somme + pageCount, 0)
console.log(pagesInternet)

// Obtenir toutes les catégories utilisées 35

    
const categorie_applati = books
        .map(book => book.categories.map(categorie => categorie.toLowerCase()))
        .reduce((accumulateur, book) => accumulateur.concat(book), []) // ou utiliser juste .flat()
        .filter(categorie => categorie !== '')
        .sort()
        .filter((x, i, t) => x !== t[i-1])
console.log(categorie_applati.length)

// Tous les titres de livres qui ont Javascript dans le titre

const title_Javascript = books
        .map(book => book.title)
        .filter(title => title.includes("JavaScript"))
console.log(title_Javascript)

// Nombre d'auteurs 

const nb_auteur = books
        .map(book => book.authors.map(auteur => auteur.toLowerCase()))
        .flat()
        .filter(auteur => auteur !== '')
        .sort()
        .filter((x,i,t) => x !== t[i-1])
console.log(nb_auteur.length)










