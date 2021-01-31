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

	 var usuario1= new usuario1("2003", 18)


var edadUsuario=[
	new edadUsuario (18),
	new edadUsuario (25),
	new edadUsuario (50),
	new edadUsuario (20),
	new edadUsuario (35),
]

console.log(edadUsuario.lenght)