function crearTabla(array){
    var tabla = document.createElement("table");

    tabla.setAttribute('border', '1px solid black');
    tabla.setAttribute('style', 'border-collapse:collapse');
    tabla.setAttribute('width', '700px');

    // tabla.className("tabla");

    let header = document.createElement("tr");

    for (atrib in array[0]) {        
            let th = document.createElement("th");
        
            th.textContent = atrib;
            header.appendChild(th);
    }

    tabla.appendChild(header);

    for (let i in array) {
            var fila = document.createElement("tr");
            var obj = array[i];

            for (var j in obj) {
                    var celda =document.createElement("td");
                    celda.setAttribute('style', 'text.align:center');
                    var dato = document.createTextNode(obj[j]);
                    celda.appendChild(dato);
                    fila.appendChild(celda);
            }

            tabla.appendChild(fila);
    }

    return tabla;
}
