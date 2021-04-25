function agregarComentario(autor, comentario) {
    var textoAutor = document.createTextNode(autor);
    var textoComentario = document.createTextNode(comentario);
    
    var largoLista = document.getElementById("listaComentario").getElementsByTagName("li").length;

    var nuevaLista = document.createElement("li");
    nuevaLista.className = "list-group-item";

    var nuevoUsuario = document.createElement("h4");
    nuevoUsuario.appendChild(textoAutor);
    var nuevoComentario = document.createElement("p");
    nuevoComentario.appendChild(textoComentario);
    var fecha = new Date();
    var textoFecha= document.createTextNode(fecha);
    var nuevaFecha = document.createElement("p1");
    nuevaFecha.appendChild(textoFecha);

    nuevaLista.appendChild(nuevoUsuario);
    nuevaLista.appendChild(nuevoComentario);
    nuevaLista.appendChild(nuevaFecha)
    if(largoLista>3){
        document.getElementById("listaComentario").appendChild(nuevaLista);
        var lista = document.getElementById("listaComentario");
        lista.removeChild(lista.childNodes[0]);
    }else{
        document.getElementById("listaComentario").appendChild(nuevaLista);
    }
}

function validar() {
    var vAutor = document.getElementById("autor").value;
    var vComentario = document.getElementById("comentario").value;
    if(vAutor == "" || vAutor == null){
        alert("Se debe agregar un nombre de usuario");
        return false;
    }else if(vAutor.length<3){
        alert("Se debe agregar usuario de al menos 3 caracteres");
        return false;
    }else if(vComentario == "" || vComentario == null){
        alert("se debe agregar un comentario");
        return false;
    }else{
        agregarComentario(vAutor, vComentario);
    }
    
}
