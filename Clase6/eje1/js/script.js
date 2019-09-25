window.addEventListener("load", function(){
    this.document.getElementById('btnTraer').addEventListener('click', traerTexto());
});

function traerTexto(){

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        // codigo que maneja la peticion
        let info = document.getElementById('info');
        if (/*xhr.readyState == 4*/true) {
            if (xhr.status == 200) {
                setTimeout(() => {
                    info.innerText = "eje1\texto.txt";
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

    xhr.open('GET','./texto.txt', true);
    xhr.send();
}