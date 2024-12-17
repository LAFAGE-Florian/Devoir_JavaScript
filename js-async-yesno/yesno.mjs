const yesNoAPIurl = "https://yesno.wtf/api"
const DEFAULT_DELAI = 7000;

/**
 *  Cette fonction peut être fournie dans le .then d'une promesse.
 *  Elle accepte n'importe quels paramètres et les transmet après un délai de
 *  ms millisecondes.
 */
function wait(ms, number) {
    console.log("number =", number, "ms =", ms);
    return function(...v) {
    return new Promise(resolve => setTimeout(() => resolve(...v), ms));
    };
}


let yesNoRequestCount = 0;  // pour numéroter les appels à yesNo
/**
 * Retourner la réponse json de yesno.wtf sous la forme d'une promesse.
 * Un délai aléatoire compris entre 0 et `delai` et ajouté avant de rendre le
 * résultat.
 */
function yesNo(delai) {
    return yesNoThen(delai);
}

// Avec .then

function yesNoThen(delai) {
    delai = Number(delai) || DEFAULT_DELAI;
    const number = yesNoRequestCount++;
    return fetch(yesNoAPIurl)
    .then(wait(Math.random() * delai, number))
    .then(response => response.json())
    .then(object => ({...object, number: number}));
}

// Avec await.

async function yesNoAwait(delai) {
    delai = Number(delai) || DEFAULT_DELAI;
    const number = yesNoRequestCount++;
    const response = await fetch(yesNoAPIurl);
    await wait(Math.random() * delai, number)();
    const object = await response.json();
    return {...object, number: number}
}

function simpleUseThen() {
    yesNo().then(data => console.log("simpleUseThen: yesNo data is :", data));
}

async function simpleUseAwait() {
    const data = await yesNo();
    console.log("simpleUseAwait: yesNo data is :", data);
}

function oneYesNoThen() {

    const section = document.createElement("section");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const number = document.createElement("h2");

    article.append(number, img, h2);
    section.append(article);
    document.body.append(section);
    
    yesNo()
        .then(data => {
            img.src= data.image;
            h2.append(data.answer);
            number.append(data.number);
        }) 
}

async function oneYesNoAwait() {
    const section = document.createElement("section");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const number = document.createElement("h2");

    article.append(number, img, h2);
    section.append(article);
    document.body.append(section);
    
    const data = await yesNo()
    img.src= data.image;
    h2.append(data.answer);
    number.append(data.number);
       
}

function severalYesNoThen(count) {
    const section = document.createElement("section");

    for (let i = 0; i < count; i++) {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const number = document.createElement("h2");
        article.append(number, img, h2);
        section.append(article);
        document.body.append(section);
        
        yesNo()
        .then(data => {
            img.src= data.image;
            h2.append(data.answer);
            number.append(data.number);
        }) 
    }
}

async function severalYesNoAwait(count) {
    const section = document.createElement("section");

    for (let i = 0; i < count; i++) {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const number = document.createElement("h2");
        article.append(number, img, h2);
        section.append(article);
        document.body.append(section);
        
        async function rapide() {
            const data = await yesNo()
            img.src= data.image;
            h2.append(data.answer);
            number.append(data.number);
        }
        rapide()
    } 
}

function yesNoCountThen(times) {
    
    
}

//window.addEventListener('load', oneYesNoThen);
//window.addEventListener('load', oneYesNoAwait);
//window.addEventListener('load', simpleUseThen);
//window.addEventListener('load', simpleUseAwait);
//window.addEventListener('load', () => severalYesNoThen(10))
window.addEventListener('load', () => severalYesNoAwait(10))