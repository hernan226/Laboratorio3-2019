
var z=30;//variable

console.log(typeof z);
///////////////////////////////////////////////////////////////////////////////////////////
var x=function(){
    return 4+3
};// funcion anonima

console.log(typeof x);
///////////////////////////////////////////////////////////////////////////////////////////
var y = {
    nombre:"Juan",
    apellido:"Perez",
    edad:30,
    saludar:function(){
        return "Hola mundo, soy " + this.nombre;
    }
};//esto es un objeto
///////////////////////////////////////////////////////////////////////////////////////////
function Persona(nombre, apellido, edad) {
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.saludar = function(){
        return "Hola mundo, soy " + this.nombre +
         " " + this.apellido + " y tengo " + this.edad + " años";
    }
};//"clase"

///////////////////////////////////////////////////////////////////////////////////////////

var p1= new Persona("Hernesto", "Sans", 30);
var p2= new Persona("Carlos", "Tevez", 50);

console.log(p1.saludar());
/*
    //lo loco es que puedo hacer
    p1.altura=1.80;
    console.log(p1.altura);
*/

Persona.prototype.altura = 1.50;

console.log(p1.altura);
console.log(p2.altura);

///////////////////////////////////////////////////////////////////////////////////////////

function foo(){
    console.log("Hola mundo");
}

p=foo;

p();

foo();

///////////////////////////////////////////////////////////////////////////////////////////

function foo2(a,b,c){
    console.log(arguments);
}

t=foo2;

t();

foo2(123,321,231);

///////////////////////////////////////////////////////////////////////////////////////////

function foo2(a,b,c){
    console.log(arguments);
}

t=foo2;

t();

foo2(123,null,231);
