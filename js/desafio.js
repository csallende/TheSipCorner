var mayores= 18;
var menores= 17;

function calcularEdad(){
  var anioNacimiento = parseInt(prompt("Ingrese el año de su nacimiento para verificar su edad"));

	var edad = (2021 - anioNacimiento);

	if(edad > mayores){
	 alert("Bienvenido a The Sip Corner");
	} else if (edad < menores){
		alert("Lo sentimos, este sitio es sólo para mayores de edad");
	} else {
      alert("No es una edad válida")
}
 return edad; 
}

// Storage

session.Storage.setItem('edad', 18);
session.Storage.edad(18);

// Objeto

function usuario (anioNacimiento, edad){
	this.anioNacimiento=anioNacimiento;
	this.edad=edad;

	this.ingresar=function(){
		console.log(this.usuario+" puede ingresar")
	}
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




// DOM

const hideButtons = () =>{

     let buttons = document.getElementsByClassName("btn btn-primary py-2 px-4");

     if(edad < 18){

         for (let i = 0, i < buttons.length; i++){

              buttons[i].classList.add("ocultar")  

         }
     }

}


// Eventos

document.getElementsByClassName("btn btn-primary py-2 px-4").onclick = calcularEdad;

function calcularEdad();