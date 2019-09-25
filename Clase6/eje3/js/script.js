window.addEventListener("load", function(){
    this.document.getElementById('btnTraer').addEventListener('click', traerTexto());
});

function traerTexto(){

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        // codigo que maneja la peticion
        let info = document.getElementById('info');
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                setTimeout(() => {
                    let lista = JSON.parse(xhr.responseText);
                    info.innerHTML = "";
                    for (const persona of lista) {
                        info.innerHTML += `Nombre: ${persona.nombre} ${persona.apellido}
                         Sexo: ${persona.genero} Edad: ${persona.edad}<\hr>`;
                    }

                    clearTimeout(tiempo);
                }, 1000);
            }
            else{
                    console.log(`Error: ${xhr.$status}`);
            }
        }
        else{
            info.innerHTML = '<img src="./../images/spinner.gif" alt="spinner">';
        }
    };

    xhr.open('GET','Personas.json', true);
    xhr.send();
    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'intente nuevamente';
    }, 2000);
}

