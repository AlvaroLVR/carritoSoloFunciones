// Carrito de Compras
/* FEATURES: BOTON DE FAVORITO - TOTALIZAR LA COMPRA CON TODOS LOS ARTICULO AGREGADOS AL CARRITO - OPCIONES DE PRECIO USD/EURO/ - AGREGAR UN SUMADOR DE PRODUCTOS AL CARRITO DE COMPRAS 
 */
let objetoComparador = {};


let inventario = [{ producto: 'pantalon' , precio: '3400',color:'negro',talle:'S',codigo:'0000'},
{ producto:'pantalon' ,  precio: '3400',color:'negro',talle:'L',codigo:'1000'},
{ producto:'pantalon' ,  precio: '3400',color: 'blanco',talle:'M',codigo:'1001'},
{ producto:'pantalon' ,  precio: '3400',color: 'jean',talle:'XL',codigo:'1002'},
{ producto:'pantalon' ,  precio: '3400',color:'diseño',talle:'XXL',codigo:'1003'},
{ producto:'remera' , precio:'2000',color:'negro',talle:'S',codigo:'1004'},
{ producto:'remera' , precio:'2000',color: 'blanco',talle:'M',codigo:'1005'},
{ producto:'remera' , precio:'2000',color:'estampado',talle:'L',codigo:'1006'},
{ producto:'remera' , precio:'2000',color:'azul',talle:'XL',codigo:'1007'},
{ producto:'remera' , precio:'2000',color:'diseño',talle:'XXL',codigo:'1008'},
{ producto:'buzo', precio: '6000',color:'negro',talle:'S',codigo:'1009'},
{ producto:'buzo', precio: '6000',color: 'blanco',talle:'M',codigo:'1010'},
{ producto:'buzo', precio: '6000',color:'estampado',talle:'L',codigo:'1011'},
{ producto:'buzo', precio: '6000',color:'azul',talle:'XL',codigo:'1012'},
{ producto:'buzo', precio: '6000',color:'diseño',talle:'XXL',codigo:'1013'},
{ producto:'gorra', precio:'1000',color:'negro',talle:'M',codigo:'1014'},
{ producto:'gorra', precio:'1000',color: 'blanco',talle:'M',codigo:'1015'},
{ producto:'gorra', precio:'1000',color:'rojo',talle:'M',codigo:'1016'},
{ producto:'gorra', precio:'1000',color:'estampado',talle:'M',codigo:'1017'},
{ producto:'gorra', precio:'1000',color:'diseño',talle:'M',codigo:'1018'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1019',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1020',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1021',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1022',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1023',color:'diseño'}]

let guardarLocal = (clave,valor) =>{ localStorage.setItem(clave,valor)};
guardarLocal('inventario',JSON.stringify(inventario));

//localStorage.clear();
escribirHTML(inventario)


function limpiarStorage(a){
    localStorage.clear();
}
function removerStorage(a){
    localStorage.removeItem(a);
}

// PEDIR TIPO DE ROPA

let tipoRopa = document.getElementById("tipoRopa");
tipoRopa.addEventListener("change", MostrarTipoRopa = () =>{   objetoComparador.producto = tipoRopa.value  });

// PEDIR COLORES 

let blanco = document.getElementById("colorBlanco");
blanco.addEventListener("change",mostrar = () =>{   objetoComparador.color = 'blanco' })

let negro = document.getElementById("colorNegro");
negro.addEventListener("change",mostrar = () =>{    objetoComparador.color = 'negro'})

let rojo = document.getElementById("colorRojo");
rojo.addEventListener("change",mostrar = () =>{     objetoComparador.color ='rojo'})

let diseño = document.getElementById("colorDiseño");
diseño.addEventListener("change",mostrar = () =>{   objetoComparador.color = 'diseño'})

// PEDIR MEDIDAS

let talle;
let S = document.getElementById("S");
S.addEventListener("change",mostrar = () =>{    objetoComparador.talle =    'S'})
let M = document.getElementById("M");
M.addEventListener("change",mostrar = () =>{    objetoComparador.talle =    'M'})
let L = document.getElementById("L");
L.addEventListener("change",mostrar = () =>{    objetoComparador.talle =    'L'})
let XL = document.getElementById("XL");
XL.addEventListener("change",mostrar = () =>{   objetoComparador.talle =    'XL'})
let XXL = document.getElementById("XXL");
XXL.addEventListener("change",mostrar = () =>{  objetoComparador.talle =    'XXL'})

// FILTROS NUMERICOS

function vericicacionNumerica(a){
    isNaN(codigoCompra.value) ? alert('Ingrese Números') : '';
}

// FUNCION RECIBIDORA DE DATOS E IMPRIMIR HMTML

let botonPedir = document.getElementById('buscar');
botonPedir.addEventListener('click',tomarDatos = () =>{
    console.log(objetoComparador);
    buscadorInventario(objetoComparador);
});

// ingresan objetos y busca objetos / a ingresar palabras y buscar objetos. 

function buscadorInventario(a){
    let array = inventario.filter(i => (i.producto == a.producto) && ((i.talle == a.talle) || (i.color == a.color) || (i.codigo == a.codigo)))
    let resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.innerText = 'resultado de la busqueda: '+ array.length ;
    (array == 0 ) ? console.log('vacio') : '';
    escribirHTML(array); 
}

function buscadorInventario2(a){
    let array = inventario.filter(i => (i.producto == a))
    let resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.innerText = 'resultado de la busqueda: '+ array.length ;
    escribirHTML(array);
}

/* recibe un objeto y lo convierte en card */

function escribirHTML(a) {
    let catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ``;
    a.forEach(i => {
        let catalogoNew1 = document.createElement('div');
        catalogoNew1.innerHTML= `
        <div class="tarjeta d-flex shadow flex-row mb-3 p-2 align-items-center justify-content-between bg-light rounded-1" style="width: auto; height: auto;position: relative">

        <svg class="fav " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path class="botonFavorito" fill="#e4e6e8" d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>

            <div class="d-flex flex-row " >
                <img src="./img/${i.producto}.jpg" class="border border-1 border-ligth imagen" alt="tienda1" height="200px" width="250">
                <div class="ms-5 datosCard" id="datosCard">
                    <h5 class="producto">${i.producto}</h5>
                    <p class="precio"> ${i.precio}</p>
                    <p class="talle"> ${i.talle}</p>
                    <p class="color"> ${i.color}</p>
                    <p class="codigo"> ${i.codigo}</p>  
                    <button class="btn btn-success aCarrito ">Añadir al carrito</button> 
                </div>
            </div>

            <div class="" id="botones">
                
            </div>
        </div>` 
        catalogo.appendChild(catalogoNew1); 
    });
   
} 

// BUSCADOR DEL SITIO 

let buscador = document.getElementById('buscador');
buscador.addEventListener('change', buscar = ()=>{
    buscadorInventario2(buscador.value);  
})

// CARRITO 
let carritoVentana = document.getElementById('carritoVentana');
carritoVentana.className = 'carritoVentanaNone border shadow rounded-2 bg-light d-flex flex-column';

let carrito = document.getElementById('carrito'); // MOSTRAR VENTANA DE CARRITO
carrito.addEventListener('click', hola = ()=>{
    console.log('presionaste el carrito');
    carritoVentana.className = 'carritoVentanaActive border shadow rounded-2 bg-light d-flex flex-column';
});

let cross = document.getElementById('cross'); // CERRAR VENTANA DE CARRITO
cross.addEventListener('click',hola= ()=>{
    console.log('presionaste la cruz');
    carritoVentana.className = 'carritoVentanaNone border shadow rounded-2 bg-light d-flex flex-column';
})

let aCarrito = document.querySelectorAll('.aCarrito');

aCarrito.forEach(ele => {
    ele.addEventListener('click',capturador)
});
aCarrito.forEach(ele => {
    ele.addEventListener('click',()=>{
        Toastify({
            text: "Agregado al carrito",
            className: "info",
            duration:1000,
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    })
});

function capturador (e){
    let evento =  e.target;  // toma los datos del evento
    let datos = evento.closest('.datosCard'); //captura el elemento mas cercano
    let codigo = datos.querySelector('.codigo').innerText; // lee el texto dentro del elemento con la clase .codigo
    lista(codigo);  // envia el codigo del elemento seleccionado a la funcion lista.
}

// precio total 
let pTotal = document.getElementById('precioTotal');
let total=0;
let c=0;
function precioTotal(a){
    total = a.reduce((acc, el)=> acc + el.precio ,0);

    pTotal.innerText = total;
    console.log('este es el precio total ', total);
    //return total;
}

// CANTIDAD DE PRODUCTOS EN EL CARRITO 
let listaJSON = [];
let cantAgreCarr = document.getElementById('cFav');
let consultaCant = ()=>{
    cantAgreCarr.innerText = (JSON.parse(localStorage.getItem('productosCarrito'))).length; //numero de productos agregados al carrito
}

function lista(a) {  // recibe el codigo del producto seleccionado 
    let dato = inventario.find(i => i.codigo == a); // busca el producto con el codigo ingresado y guarda el objeto en dato 

    listaJSON.push(dato);
    console.log('productos agregados al JSON',listaJSON);
    agregarJson(listaJSON);
    imprimirTabla(listaJSON);
    precioTotal(listaJSON);
}

// TABLA DE COMPRAS

let tabla = document.getElementById('tabla');
let cant=0; 

// Funcion que imprime objetos en la tabla, recibe un array de objetos

function imprimirTabla(a) {
    console.log('imprimendo');
    tabla.innerHTML= ` `;

    a.forEach(el => {
        let newtr = document.createElement('tr');
        newtr.innerHTML= `<th id="thCodigo" scope="row"> ${el.codigo}</th>
        <td id="tdproduco">${el.producto}</td>
        <td id="tdprecio">$ ${el.precio}</td>
        <td id="tdcantidad"></td>
        <td id="tdboton">`
        tabla.appendChild(newtr);
    });  
    consultaCant();
}

// funcion que recibe un array de objetos y los almacena en el JSON productos carrito

let agregarJson = (a) =>{ guardarLocal('productosCarrito',JSON.stringify(a))}