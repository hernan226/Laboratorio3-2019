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
                    let Persona = JSON.parse(xhr.responseText);
                    info.innerText = `Nombre: ${Persona.nombre} ${Persona.apellido} Edad: ${Persona.edad}`;
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

    xhr.open('GET','Persona.json', true);
    xhr.send();
    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'intente nuevamente';
    }, 2000);
}