window.addEventListener("load", ()=>{
    document.forms[0].addEventListener('submit', (e)=>{
        let xhr = new XMLHttpRequest();
        let data = traerDatos(e.target);

        e.preventDefault();

        xhr.onreadystatechange = ()=>{
            // codigo que maneja la peticion
            let info = document.getElementById('info');
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    setTimeout(() => {
                        info.innerText = xhr.responseText;
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

        xhr.open('GET','server.php/?'+data, true);
        xhr.setRequestHeader('Content-type','Application/x-wwww-form-urlencoded');
        xhr.send();
        var tiempo = setTimeout(() => {
            xhr.abort();
            info.innerHTML = 'intente nuevamente';
        }, 2000);
    });
});


function traerDatos(form){
    let nombre = form.nombre.value;
    let apellido = form.apellido.value;

    return `Nombre=${nombre}&apellido=${apellido}`;
    
}
