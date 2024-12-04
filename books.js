'use strict';

// Quelques livres pour l'exemple...
const books = [
  {
    "title": "Unlocking Android",
    "isbn": "1933988673",
    "pageCount": 416,
    "publishedDate": { "$date": "2009-04-01T00:00:00.000-0700" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
    "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
    "status": "PUBLISH",
    "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
    "categories": ["Open Source", "Mobile"]
  },
  {
    "title": "Android in Action, Second Edition",
    "isbn": "1935182722",
    "pageCount": 592,
    "publishedDate": { "$date": "2011-01-14T00:00:00.000-0800" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
    "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
    "status": "PUBLISH",
    "authors": ["W. Frank Ableson", "Robi Sen"],
    "categories": ["Java"]
  },
  {
    "title": "Specification by Example",
    "isbn": "1617290084",
    "pageCount": 0,
    "publishedDate": { "$date": "2011-06-03T00:00:00.000-0700" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
    "status": "PUBLISH",
    "authors": ["Gojko Adzic"],
    "categories": ["Software Engineering"]
  },
  {
    "title": "Flex 3 in Action",
    "isbn": "1933988746",
    "pageCount": 576,
    "publishedDate": { "$date": "2009-02-02T00:00:00.000-0800" },
    "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
    "longDescription": "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
    "status": "PUBLISH",
    "authors": ["Tariq Ahmed with Jon Hirschi", "Faisal Abid"],
    "categories": ["Internet"]
  }
]


/** Produire un DOM pour représenter un tableau de livres,
 * ajoutés comme dernier de l'élément body.
 */
function display(books) {
  console.info("Constuire le DOM...");
  const ol = document.createElement('ol');

  for (const indice in books){
    const li = document.createElement('li');
    ol.append(li);
    li.setAttribute("id", books[indice].isbn);
    li.setAttribute("class", books[indice].title);

    const e1 = document.createTextNode(books[indice].title);
    li.append(e1);
    const dl = document.createElement('dl');
    li.append(dl)

    for (const [attribut, valeur] of Object.entries(books[indice])) {
      if (attribut !== "title"){

        const dt = document.createElement('dt');
        dl.append(dt)
        //const textdt = document.createTextNode(attribut);
        dt.append(attribut)
        dt.setAttribute("class", attribut);

        const dd = document.createElement('dd');
        dl.append(dd);
        //const textdd = document.createTextNode(valeur);
        dd.append(valeur)
      }
    }
  }
  document.body.append(ol)
}


/** Récupérer une liste de livres depuis le document précédent.
  * Les livres n'auront que les champs : title, pageCount, categories et authors.
  * @return un tableau de livre, chaque livre a les attributs ci-dessus.
  */
function domBooksToJSON() { 
  const books = [];
  const lis = document.getElementsByTagName('li');
 
  
  for (const li of lis) {
    const title = li.firstChild.wholeText;
    const book = {title : title};
    books.push(book);
    console.log("book =", book);

    for (const dt of li.getElementsByTagName('dt')) {
      const dd = dt.nextSibling;
      book[dt.innerText] = dd.innerText;
    }
  }
  return books
}



/** Produit un élément table qui contient les informations sur books,
 * un tableau de books avec les attributs précisés.
 */
function booksToTable(books, attributs = ['title', 'pageCount', 'categories', 'authors']) {
	// TODO : à faire
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const tbody = document.createElement("tbody");
  table.append(tbody);
  table.append(thead);
  thead.append(tr);
  

  for (const element of attributs) {
    const th = document.createElement("th");
    th.append(element);
    tr.append(th); 
  }

  for (const book of books) {
    const tr2 = document.createElement("tr");
    tbody.append(tr2);

    for (const attribut of attributs) {
      const td = document.createElement("td");
      td.append(book[attribut]);
      tr2.append(td);
    }
  }
  return table;
}
  // par book je veux que afficher en thead dans un tr les th de toutes mes clés 
  // et en tbody dans un tr les td de toutes mes valeurs qui correspondent


const montrer = document.getElementById("montrer");
const cacher = document.getElementById("cacher");


montrer.addEventListener("click", () => {
  .classList.add(cache))
}
  


cacher.addEventListener("click", () =>)

window.addEventListener('load', () => {
	display(books);
	books.length = 0;
	console.log("books:", books);
	const booksFromDom = domBooksToJSON();
	console.log("booksFromDom:", booksFromDom);
	// Insérer dans body le résultat de booksToTable(booksFromDom)
  document.body.append(booksToTable(booksFromDom))
});


