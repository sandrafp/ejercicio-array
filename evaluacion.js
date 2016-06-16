/* arreglo con 10 posiciones  con una devolucion de numer  pares (+1) ejemplo numeros pares 2 4 6 
devolucion : 3 5 7; */


 var Numeros = [12, 23, 38, 43, 5, 6, 72, 81, 91, 10];
 var NuevoArray = [];
 

 for(i = 0 ; i <= Numeros.length ; i++){
	if( Numeros[i] % 2 === 0){
		Numeros[i] + 1;
		NuevoArray.push(Numeros[i] + 1);
	}
}
console.log(NuevoArray);






