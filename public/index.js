
mostrarLibros();
function mostrarLibros(){
    fetch("/api/libros")
        .then(function (res){
            return res.json();
        }).then(function (datos){
            let libros ="";
            for (let i=0; i<datos.length; i++) {
                libros += `<div>
                           <h3>Título: ${datos[i].titulo}</h3>
                           <p>Estado: ${datos[i].estado}</p>
                           <br>
                           </div>`;
            }
            document.getElementById("div1").innerHTML = libros;
        })
}
