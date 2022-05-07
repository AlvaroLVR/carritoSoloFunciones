document.write('clase n°: 4 / fecha: 5/5 / alumno: Alvaro Valencia');
// Carrito de Compras
/*Declaracion de variables */
let pantalon = 3400;
let buzo = 6000;
let remera = 2000; 
let accesorio = 600;
let gorras = 1000;
let c=0;
let producto; 
let door = '';
let totalCompras = 0;

function SeleccionDecompras (producto) {
    switch (parseFloat(producto)) {
        case 1: 
            if (door == 'y' || door == 'Y') {
                memoria(pantalon);
            console.log('compraste un pantalon',)
            }
            break;
        case 2: 
            if (door == 'y' || door == 'Y') {
                memoria(remera);
                console.log('compraste una remera',)
            }      
            break;
        case 3:
            if (door == 'y' || door == 'Y') {
                memoria(buzo);
                console.log('compraste un buzo',)
            }        
            break;
        case 4: 
            if (door == 'y' || door == 'Y') {
                memoria(gorras);
                console.log('compraste una gorra',)
            }     
            break;
        case 5: 
            if (door == 'y' || door == 'Y') {
                memoria(accesorio);
            console.log('compraste un accesorio',)
            }        
            break;
        default:
            break;
    } 

    return 0
}
let memoria = (a) =>{
    c++;
    totalCompras += a;
    console.log('entraste a la funcion y el total de las compras vale :', parseFloat(totalCompras));
    
    return totalCompras
}
/* MAIN */
alert('| Bienvenido a tienda AIVA |  \n A continuacion ingrese el codigo de los articulos que desee comprar. para finalizar ingrese (N) \n Gracias! ' )

do {
    
    door = prompt  ('Desea continuar operando? Ingrese (Y) para continuar ó (N) para finalizar el proceso');
    if( door == 'y' || door == 'Y'  ) { producto = prompt('- TIENDA DE ROPA - \n | Articulos en venta |  \n Para seleccionar un producto ingrese el numero del mismo. \n -Pantalon: $ 3400 | Numero de producto (1)\n -Remera: $ 2000 | Numero de producto (2)\n -Buzo: $ 6000 | Numero de producto (3)\n -Gorras: $ 1000 | Numero de producto (4)\n -Accesorio: $ 600 | Numero de producto (5)\n)' )

    SeleccionDecompras(producto);  
    }
    
}while (door == 'y' || door == 'Y');

alert('Proceso Finalizado. \n El total de tu compra es:  '+ Number(totalCompras) +' \n La cantidad de productos comprados es de : '+ c);