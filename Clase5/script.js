window.addEventListener("load", inicializarManejador);

var frm;
let mascotas = [];

function inicializarManejador(){

    frm = document.forms[0];

    frm.addEventListener('submit', submitHandler);

}

function submitHandler(e){
    
    e.preventDefault();

    let nMascota = obtenerMascota(e.target);

    mascotas.push(nMascota);
    
    document.getElementById("divTabla").innerHTML = "";
    document.getElementById("divTabla").appendChild(crearTabla(mascotas));

    show(mascotas);
}

function show(obj){
    console.clear();

    for (elemento of obj) {
        console.log(elemento);
    }
}

function obtenerMascota(frm){

    let nombre;
    let tipo;
    let edad;
    let alimento;
    let vacunado;
    let desparasitado;
    let castrado;
    
    for (elemento of frm.elements) {
        switch (elemento.name) {
            case "nombre":
                nombre = elemento.value;
                break;

            case "edad":
                edad = elemento.value;
                break;

            case "tipo":
                if (elemento.checked)
                    tipo = elemento.value;
                break;

            case "vacunado":
                vacunado = elemento.checked;
                break;

            case "alimento":
                alimento = elemento.value;
                break;

            case "desparasitado":
                desparasitado = elemento.checked;
                break;

            case "castrado":
                castrado = elemento.checked;
                break;

            default:
                break;
        }
        
    }

    return new Mascota(nombre, edad, tipo, castrado, vacunado, desparasitado, alimento);
}