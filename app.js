
document.write('clase n°: 4 / fecha: 5/5 / alumno: Alvaro Valencia');
// Carrito de Compras
/*Declaracion de variables */
let pantalon = 3400;
let buzo = 6000;
let remera = 2000; 
let accesorio = 600;
let gorras = 1000;
let c=0;

let cantidadIndu;
let caracteristica;
let producto; 
let door = '';
let totalCompras = 0;
let fecha = new Date();

let listaCompras = [];

/* ********************************************************************************************************************
************************************AGREGANDO CLASES DE OBJETOS AL CARRITO*********************************************
******************************************************************************************************************** */

class indumentariaVendida{
    constructor(tipo,talle,precio,color,material){
        this.tipo = tipo;
        this.talle = talle;
        this.precio = precio;
        this.color = color;
        this.material = material;
        this.vendido = false;
    }
    iva() {
        this.precio = precio * 1.21;
    }
}

/* class indumentariaRegistrada{
    constructor(tipo,talle,precio,color,material,codigo){
        this.tipo = tipo;
        this.talle = talle;
        this.precio = precio;
        this.color = color;
        this.material = material;
        this.codigo = codigo;
        this.vendido = false;
    }
    iva() {
        this.precio = precio * 1.21;
    }
} */

function seleccionCaracteristicas (producto){
    switch ( parseFloat(producto)) {
        case 1: //Pantalon
            if (door == 'y' || door == 'Y') {
                alert('| Usted ingreso a la sección de PANTALONES |')
                tipo = prompt('Selecciona el Tipo \n -PANTALON LARGO (6)\n -PANTALON CORTO (7)\n -JEAN (8)\n -PANTALON STREET (9)');        
                talle = prompt('Selecciona el Talle \n -S (1)\n -M (2)\n -L (3)\n -XL (4)\n -XXL (5)');        
                color = prompt('Selecciona el Color \n -BLANCO (1)\n -NEGRO (2)\n -AZUL (3)\n - VERDE (4)\n -AZUL MARINO (5) \n -DISEÑO (6)');         
                material = prompt('Selecciona el Material \n -ALGODÓN (1)\n -POLIESTER (2)\n -LINO (3)\n -MEZCLILLA (4) \n -DISEÑO (5)' );
                precio = pantalon;
                //cantidadIndu = prompt('ingrese la cantidad de Pantalones que desea comprar');

                memoria(precio);
                caracteristicas(tipo,talle,precio,color,material);
            }
        break;
        case 2: //remera
            if (door == 'y' || door == 'Y') {
                alert('| Usted ingreso a la sección de REMERAS |')
                tipo = prompt('Selecciona el Tipo  \n -CAMISA (1)\n -CAMISETA (2)\n -CHOMBA (3)\n -REMERA OVERSIZE (4)\n -REMERA DISEÑO (5) ');        
                talle = prompt('Selecciona el Talle \n -S (1)\n -M (2)\n -L (3)\n -XL (4)\n -XXL (5)');        
                color = prompt('Selecciona el Color \n -BLANCO (1)\n -NEGRO (2)\n -AZUL (3)\n - VERDE (4)\n -AZUL MARINO (5) \n -DISEÑO (6)');         
                material = prompt('Selecciona el Material \n -ALGODÓN (1)\n -POLIESTER (2)\n -LINO (3)\n -MEZCLILLA (4) \n -DISEÑO (5)' );
                precio = remera;
                //cantidadIndu = prompt('ingrese la cantidad de Pantalones que desea comprar');
                memoria(precio);
                caracteristicas(tipo,talle,precio,color,material);
            }
        break; 
        case 3: // buzo
            if (door == 'y' || door == 'Y') {
                alert('| Usted ingreso a la sección de BUZO |')
                tipo = prompt('Selecciona el Tipo  \n -BUZO OVERSIZE (10)\n -BUZO CANGURO (11)\n -BUZO SIMPLE (12)\n -BUZO DISEÑO (13)\n ');        
                talle = prompt('Selecciona el Talle \n -S (1)\n -M (2)\n -L (3)\n -XL (4)\n -XXL (5)');        
                color = prompt('Selecciona el Color \n -BLANCO (1)\n -NEGRO (2)\n -AZUL (3)\n - VERDE (4)\n -AZUL MARINO (5) \n -DISEÑO (6)');         
                material = prompt('Selecciona el Material \n -ALGODÓN (1)\n -POLIESTER (2)\n -LINO (3)\n -MEZCLILLA (4) \n -DISEÑO (5)' );
                precio = buzo;
                //cantidadIndu = prompt('ingrese la cantidad de Pantalones que desea comprar');
                memoria(precio);
                caracteristicas(tipo,talle,precio,color,material);
            }
        break;
        case 4: //gorras
            if (door == 'y' || door == 'Y') {
                alert('| Usted ingreso a la sección de GORRA |')
                tipo = prompt('Selecciona el Tipo  \n -GORRA SIMPLE (14)\n -GORRA VICERA (15)\n -GORRA PILUSO (16)\n -GORRA DISEÑO (17)\n ');        
                talle = prompt('Selecciona el Talle \n -S (1)\n -M (2)\n -L (3)\n -XL (4)\n -XXL (5)');        
                color = prompt('Selecciona el Color \n -BLANCO (1)\n -NEGRO (2)\n -AZUL (3)\n - VERDE (4)\n -AZUL MARINO (5) \n -DISEÑO (6)');         
                material = prompt('Selecciona el Material \n -ALGODÓN (1)\n -POLIESTER (2)\n -LINO (3)\n -MEZCLILLA (4) \n -DISEÑO (5)' );
                precio = gorras;
                //cantidadIndu = prompt('ingrese la cantidad de Pantalones que desea comprar');
                memoria(precio);
                caracteristicas(tipo,talle,precio,color,material);
            }            
        break;
        case 5: //accesorios
            if (door == 'y' || door == 'Y') {
                alert('| Usted ingreso a la sección de ACCESORIOS |')
                tipo = prompt('Selecciona el Tipo  \n -ACCESORIO  COLLAR (18)\n -ACCESORIO PULSERA (19)\n -ACCESORIO BILLETERA(20)\n -ACCESORIO CARTERA (21)\n -ACCESORIO MEDIA (22)\n -ACCESORIO DISEÑO (23)');        
                talle = prompt('Selecciona el Talle \n -S (1)\n -M (2)\n -L (3)\n -XL (4)\n -XXL (5)');        
                color = prompt('Selecciona el Color \n -BLANCO (1)\n -NEGRO (2)\n -AZUL (3)\n - VERDE (4)\n -AZUL MARINO (5) \n -DISEÑO (6)');         
                material = prompt('Selecciona el Material \n -ALGODÓN (1)\n -POLIESTER (2)\n -LINO (3)\n -MEZCLILLA (4) \n -DISEÑO (5)' );
                precio = accesorio;
                //cantidadIndu = prompt('ingrese la cantidad de Pantalones que desea comprar');
                memoria(precio);
                caracteristicas(tipo,talle,precio,color,material);
            }   
        break;   
        default:
            break;
    } 
}
function caracteristicas(tipo,talle,precio,color,material){
    switch (parseInt(tipo)) { // TIPO  // remeras 1-5 * pantalone 6-9 * buzo 10-13 * gorra 14-17 * accesorio 18-23
        case 1:   
            tipo = 'camisa';  
            break;
        case 2:
            tipo = 'camiseta';
            break;
        case 3:
            tipo = 'chomba';
            break;
        case 4:
            tipo = 'remera oversize';
            break;
        case 5:
            tipo = 'remera diseño'
            break;
        case 6:
            tipo = 'pantalon corto';
            break;
        case 7:
            tipo = 'pantalon largo';
            break;
        case 8:
            tipo = 'jean';
            break;
        case 9: 
            tipo = 'pantalon street';
            break;
        case 10:            
            tipo = 'Buzo oversize ';
            break;
        case 11:
            tipo = 'Buzo canguro';
            break;
        case 12:
            tipo = 'Buzo simple';
            break;
        case 13:
            tipo = 'Buzo Diseño';
            break;
        case 14:            
            tipo = 'Gorra simple';
            break;
        case 15:
            tipo = 'Gorra vicera';
            break;
        case 16:
            tipo = 'Gorra piluso';
            break;
        case 17:
            tipo = 'Gorra diseño';
            break;    
        case 18:    
            tipo = 'Accesorio collar';
            break;
        case 19:
            tipo = 'Accesorio pulsera';
            break;
        case 20:
            tipo = 'Accesorio billetera';
            break;
        case 21:
            tipo = 'Accesorio cartera';
            break;
        case 22:
            tipo = 'Accesorio media';
            break;
        case 23:
            tipo = 'Accesorio diseño';
            break;
        default:
            break;
    }
    switch (parseInt(talle)) { // TALLE  S (1)- M (2)- L (3)- XL (4)- XXL (5) 
        case 1:
            talle = 'S';
            break;
        case 2:
            talle = 'M';
            break;
        case 3:
            talle = 'L';
            break;
        case 4:
            talle = 'XL';
            break;
        case 5:
            talle = 'XXL';
            break;
        default:
            break;
    }
    switch (parseInt(color)) { // COLOR  BLANCO (1) - NEGRO (2) - AZUL (3) - VERDE (4) - AZUL MARINO (5) - DISEÑO (6)  
        case 1:
            color = 'blanco';
            break;
        case 2:
            color = 'negro';
            break;
        case 3: 
            color = 'azul';
            break;
        case 4:
            color = 'verde';
            break;
        case 5:
            color = 'azul marino';
            break;
        case 6:
            color = 'diseño';
            break;
        default:
            break;
    }
    switch (parseInt(material)) { // MATERIAL  ALGODON (1) - POLIESTER (2) - LINO (3) - MEZCLILLA (4) - DISEÑO (5)  
        case 1: 
            material = 'algodon'; 
            
            break;
        case 2:
            material = 'poliester';
            break;
        case 3:
            material = 'lino';
            break;
        case 4:
            material = 'mezclilla';
            break;
        case 5:
            material = 'diseño';
            break;
        default:
            break;
    }

    creadorObjeto(tipo,talle,precio,color,material);
}
function creadorObjeto(tipo,talle,precio,color,material){ 

    const nuevaCompra = new indumentaria(tipo,talle,precio,color,material)

    listaCompras.push(nuevaCompra);

    return listaCompras
}
let memoria = (a) =>{
    totalCompras += a;

    return totalCompras
}

/* MAIN */

alert('| Bienvenido a tienda AIVA |  \n A continuacion ingrese el codigo de los articulos que desee comprar. para finalizar ingrese (N) \n Gracias! ' )

do {
    
    door = prompt  ('Desea continuar operando? Ingrese (Y) para continuar ó (N) para finalizar el proceso');
    if( door == 'y' || door == 'Y'  ) {
        producto = prompt('- TIENDA DE ROPA - \n | Articulos en venta |  \n Para seleccionar un producto ingrese el numero del mismo. \n -Pantalon | Numero de producto (1)\n -Remera | Numero de producto (2)\n -Buzo | Numero de producto (3)\n -Gorras | Numero de producto (4)\n -Accesorio| Numero de producto (5)\n)' )
        seleccionCaracteristicas(producto); 
    } 

}while (door == 'y' || door == 'Y');

console.log(listaCompras);
alert('Proceso Finalizado.\n Fecha de la compra: '+ fecha.toLocaleString()+' \n El total de tu compra es:  '+ Number(totalCompras) +' \n La cantidad de productos comprados es de : '+ Number(listaCompras.length) +'\n | VER EN CONSOLA SUS COMPRAS Y CARACTERISTICAS |');

/* ***************************************************************************************************************************************** *************************************************************DOM**************************************************************************
****************************************************************************************************************************************** */
let cantidadHTML = document.getElementById("cantidadHTML");
    cantidadHTML.innerText = listaCompras.length;
for (const datosArray of listaCompras) {
    
    let categoriaHTML = document.getElementById("categoriaHTML");
    categoriaHTML.innerText = datosArray.tipo;

    let colorHTML = document.getElementById("colorHTML");
    colorHTML.innerText = datosArray.color;

    let talleHTML = document.getElementById("talleHTML");
    talleHTML.innerText = datosArray.talle;
     
}