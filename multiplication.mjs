// TODO : à faire...
function load() {
    function calculate(nb1, nb2) {
        return nb1 * nb2;
    }
    const form = document.getElementById("multiplication");

    const button = form.calculer;

    const result = form.produit;

    function multi() {
        result.value = calculate(form.gauche.value, form.droite.value);
    }

    button.addEventListener("click", multi);

    form.gauche.addEventListener("change", multi)
    form.gauche.addEventListener("keyup", multi);
    form.changer.addEventListener("click", () => {
        form.gauche.value = 42;
        const ev = new Event("change");
        form.gauche.dispatchEvent(ev);
    })

    
}
window.addEventListener("load", load);
