var mayores= 18;
var menores= 17;

const anioNacimiento = document.getElementById("recipient-name");
const botonValidar= document.getElementById("validator").onclick= function calcularEdad();


function calcularEdad(){
  	
  	var edad = (2021 - anioNacimiento);

	if(edad > mayores){
	 alert("Bienvenido a The Sip Corner");
	 	function redireccionar(){
	 		window.location.href="tienda.html";
	 	}
	} else if (edad < menores){
		alert("Lo sentimos, esta sección es sólo para mayores de edad");
	} else {
      alert("No es una edad válida")
}
 return edad; 
}



// Objeto

function usuario (anioNacimiento, edad){
	this.anioNacimiento=anioNacimiento;
	this.edad=edad;
	}

	var usuario1= new usuario("2003", 18);
	var usuario2= new usuario("1992",29);

	console.log(usuario());

	console.log(JSON.stringify(usuario));

//Asignación de nueva edad al usuario y guardarla en un array de edades

var edadUsuario=[];
usuario1.edad=18;
usuario2.edad=29;
edadUsuario.push(usuario1.edad);

//Agregar los objetos usuarios en un array de usuarios
var usuarios=[];
	usuarios.push(usuario1,usuario2);

	console.log(edadUsuario.length)

// Storage

session.Storage.setItem('usuario', usuario1);
session.Storage.usuario(usuario1);