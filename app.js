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

class indumentaria{
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

/* alert('| Bienvenido a tienda AIVA |  \n A continuacion ingrese el codigo de los articulos que desee comprar. para finalizar ingrese (N) \n Gracias! ' )

do {    
    door = prompt  ('Desea continuar operando? Ingrese (Y) para continuar ó (N) para finalizar el proceso');
    if( door == 'y' || door == 'Y'  ) {
        producto = prompt('- TIENDA DE ROPA - \n | Articulos en venta |  \n Para seleccionar un producto ingrese el numero del mismo. \n -Pantalon | Numero de producto (1)\n -Remera | Numero de producto (2)\n -Buzo | Numero de producto (3)\n -Gorras | Numero de producto (4)\n -Accesorio| Numero de producto (5)\n)' )
        seleccionCaracteristicas(producto); 
    } 
}while (door == 'y' || door == 'Y');

console.log(listaCompras);
alert('Proceso Finalizado.\n Fecha de la compra: '+ fecha.toLocaleString()+' \n El total de tu compra es:  '+ Number(totalCompras) +' \n La cantidad de productos comprados es de : '+ Number(listaCompras.length) +'\n | VER EN CONSOLA SUS COMPRAS Y CARACTERISTICAS |'); */

/**************************************************************************************************************************************** *************************************************************DOM*************************************************************************
*****************************************************************************************************************************************/
// RECORDATORIO
// -    CREAR UN EXCEL CON LOS ARTICULO PARA VENDER Y PODER PASARLO AL HTML

//  VARIABLES DOM

let menorPrecio = document.getElementById("menorPrecio");
let mayorPrecio = document.getElementById("mayorPrecio");

let precioFinal = [];

// FILTROS NUMERICOS

let codigoCompra = document.getElementById("codigoCompra");

codigoCompra.addEventListener("change",vericicacionNumerica = () =>{
    if(isNaN(codigoCompra.value)){
        alert('Ingrese Números')
    }
});

// ESCRIBIR HTML 
let itemLista;
let botonPedir = document.getElementById("pedir");
function escribirhtml(){
    let listaComprasNueva = document.getElementById("listaComprasNueva");
    itemLista = document.createElement("li"); 
    itemLista.innerHTML = ` <h5>Detalles de su compra<h5/>
        <p>tipo: ${tipoRopa.value}</p>
        <p>cantidad: ${cantidad}</p>
        <p>codigo: ${codigo.value}</p>
        <p>color: ${color}</p>
        <p>talle: ${talle}</p>
        <p>Precio: ${cTotal() * cantidad}</p> 
        `
    itemLista.className = "fs-4 nav-item d-flex flex-column text-light nuevoItem"
    listaComprasNueva.append(itemLista);
}

botonPedir.addEventListener("click",escribirhtml);


// LIMPIAR LISTA DE FILTRO

function borrarFiltro(){
    let nuevosItem = listaComprasNueva.querySelectorAll(".nuevoItem"); // eliminando todos los hijos creados de listaCompraNueva
    for (const i of nuevosItem) { 
        i.remove()
    }
    console.log(itemLista);
    contador('limpiar');
    codigo.value = 0;
}

let limpiar = document.getElementById("limpiar");
limpiar.addEventListener("click",borrarFiltro);

// OCULTAR FILTRO

let d = 0;
let botonFiltro = document.getElementById("botonFiltro");
botonFiltro.addEventListener("click",ocultarFiltro = () =>{
    if (d==0) {
        filtro.className = "displayNone";
        d++;
    }else{
        filtro.className = "displayActive d-flex flex-column bg-secondary py-3 border-dark border-bottom border-1";
        d--;
    }    
})

// PEDIR TIPO DE ROPA

let tipoRopa = document.getElementById("tipoRopa");
tipoRopa.addEventListener("change", MostrarTipoRopa = () =>{
    //console.log(tipoRopa.value); 
    cTotal(tipoRopa.value);
})

// PEDIR CANTIDAD 

let cantidad = 0;
let agregar = document.getElementById("agregar");
let quitar = document.getElementById("quitar");
let cantidadTotal = document.getElementById("cantidadTotal");

function contador (x){

    if (x === 'limpiar') {
        cantidad = 0;
        cantidadTotal.innerText = Number(cantidad);
    }else{
        cantidad+=x;
        if (cantidad <= 0) {
            cantidad = 0;
        }
        cantidadTotal.innerText = Number(cantidad);
    }
   
    return cantidad 
}
agregar.addEventListener("click",agregar = ()=>{
    contador(+1);
    mostrarPrecioMomento(+1);
})
quitar.addEventListener("click",quitar = ()=>{
    contador(-1);
    mostrarPrecioMomento(-1);
})

// TOMAR CODIGO 

let codigo = document.getElementById("codigoCompra");
codigo.addEventListener("change",tomarCodigo = () =>{
    console.log(codigo.value);;
})

// TOMAR COLORES

let blanco = document.getElementById("colorBlanco");
blanco.addEventListener("change",mostrar = () =>{
    color = "blanco"
})
let negro = document.getElementById("colorNegro");
negro.addEventListener("change",mostrar = () =>{
    color = "negro"
})
let rojo = document.getElementById("colorRojo");
rojo.addEventListener("change",mostrar = () =>{
    color = "rojo"
})
let diseño = document.getElementById("colorDiseño");
diseño.addEventListener("change",mostrar = () =>{
    color = "diseño"
})

// PEDIR MEDIDAS
let talle;
let S = document.getElementById("S");
S.addEventListener("change",mostrar = () =>{
    talle = "s"
})
let M = document.getElementById("M");
M.addEventListener("change",mostrar = () =>{
    talle = "m"
})
let L = document.getElementById("L");
L.addEventListener("change",mostrar = () =>{
    talle = "l"
})
let XL = document.getElementById("XL");
XL.addEventListener("change",mostrar = () =>{
    talle = "xl"
})
let XXL = document.getElementById("XXL");
XXL.addEventListener("change",mostrar = () =>{
    talle = "xxl"
})

// CANTIDAD TOTAL
let tipo;
let f=0;
let total=0;
function cTotal (c){
    switch (c) {
        case 'pantalon':
            tipo = 3400;
        break;
        case 'remera':
            tipo = 2000; 
            break;
        case 'gorra':
            tipo = 1000;
        break;
        case 'accesorio':
            tipo = 600;
            break;
        case 'buzo':
            tipo = 6000;
        break;
        default:
            break;
    }

    return tipo
}
pedir.addEventListener("click", sumarCantidad = () =>{
    precioFinal.push(cTotal() * cantidad);
    console.log(precioFinal);
})
let b =0;
function mostrarPrecioMomento (a) {

    b += Number(a);
    //console.log(Number(b));
    if (b <= 0) {
        b = 0;
    }
    let precioTotal = document.getElementById("precioTotal");
    precioTotal.innerText = ( cTotal() * Number(b));
}