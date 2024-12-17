
/**
 * Afficher un décompte.  Tous les `delai` millisecondes, on affiche le
 * décompte comme valeur du champ `#countdown-value`  (innerText).
 */
function countdown(delai) {
    const form = document.getElementById('countdown-form');
    const initial_value = form.initialValue;
    const reset = form.reset;
    const intermediate = form.intermediate;
    const countdown = document.getElementById('countdown-value');
    let id = null 
    countdown.innerText = initial_value.value; 

    function decrementer () {
        countdown.innerText --;
        if (countdown.innerText === '0') {
            stop();
        }
    }

    //function reset () {
       // countdown.innerText = form.initialValue.value;
    //}
    function resume () {
        if (id === null) {
            id = setInterval(decrementer, delai)
        }     
    }

    function stop () {
        if (id !== null) {
            clearInterval(id)
            id = null
        } 
        
    }
    form.resume.addEventListener("click", resume)
    form.stop.addEventListener("click", stop)

    resume();
}

window.addEventListener("load", () => countdown(200));
