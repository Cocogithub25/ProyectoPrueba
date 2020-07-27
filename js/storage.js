//--------Variables Globales----------
var login = document.getElementById("login");
var salir = document.getElementById("salir");
var registrar = document.getElementById("registrar");
var labelUsuario = document.getElementById("labelUsuario");
//------Funciones----------

function registroUsuario() {
  let user = prompt("Registra tu usuario");  
  let pass = prompt("Registra tu password");
  localStorage.setItem('usuario', user);
  localStorage.setItem('clave' , pass);
  alert('registro completo')
}

function loginUsuario() {
    let user = prompt("Escribe tu usuario");
    let pass = prompt("Escribe tu password");

    // Buscar los datos en el local Storage

    if (user == localStorage.getItem('usuario') && pass == localStorage.getItem('clave')) {
        alert("Login exitoso");
        labelUsuario.innerHTML = user;
    } else {
        alert("Error en el login");
}
}
function salirUsuario() {
    //1 Poner vacio la variable user (usuario)
    let user = ""; 
    localStorage.setItem('usuario', user);
    
    //2 Poner vacio la vaiable pass (clave)
    let pass = "";
    localStorage.setItem('clave' , pass);

    //3 Label usuario lo va a poner vacio user
    labelUsuario.innerHTML = user;
 
  }
    

//--------Usuario en sesión------

if (localStorage.getItem('usuario')) {
    let usuarioStorage = localStorage.getItem('usuario');
    labelUsuario.innerHTML= usuarioStorage;
} else {
    
}
//--------Onclicks----------
login.onclick = function() {
    loginUsuario();
}
salir.onclick = function() {
    salirUsuario();
}
registrar.onclick = function() {
    registroUsuario();
}