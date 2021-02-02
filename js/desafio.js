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


var usuarios=[];
	usuarios.push(usuario1,usuario2);


console.log(edadUsuario.length)


// Desafío DOM

var boton=document.getElementByClassName("btn btn-primary py-2 px-4");

boton[0];

var parrafo=document.getElementByTagName("p");
parrafo[6];

var parrafo=boton.parentNode;

boton.parentNode.removeChild(boton);
