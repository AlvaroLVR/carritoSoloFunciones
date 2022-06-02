// Carrito de Compras
let inventario = [{ producto: 'pantalon' , precio: '3400',color:'negro',talle:'S',codigo:'1000'},
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
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1019'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1020'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1021'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1022'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1023'}]

let guardarLocal = (clave,valor) =>{ localStorage.setItem(clave,valor)};
guardarLocal('inventario',JSON.stringify(inventario));

let c=0;
let cantidadIndu;
let caracteristica;
let producto; 
let totalCompras = 0;
let listaCompras = [];
let precioFinal = [];

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

// BUSCADOR 

let nuevaBusqueda = [];
let buscador = document.getElementById("buscador"); 
let botonBuscador = document.getElementById("botonBuscador");
buscador.addEventListener('change', buscar = () => {
    let l =0;
    feedOriginal.remove();
    nuevaBusqueda = inventario.filter( (elemento)=> buscador.value == elemento.producto);
    crearNuevoFeed(nuevaBusqueda);
})  

// CREAR UN NUEVO FEED
let feedOriginal = document.getElementById('feedOriginal');
let feedNew = document.getElementById('feedNew');

function crearNuevoFeed (a) {
    for (const element of a) {
        let feed = document.createElement('div');
        feedNew.className = 'row row-cols-1 row-cols-md-3 g-1 container-fluid my-3';
        console.log(element);
        feed.className = 'card';
        feed.innerHTML = `<img src="#" class="card-img-top" alt="tienda1" height="330px" width="280">
        <div class="card-body">
          <h5 class="card-title">${element.producto}</h5>
          <p class="card-text" >Talle:${element.talle}</p>
        </div>
        <ul class="list-group list-group-flush" >
          <li class="list-group-item" >${element.precio}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">Comprar</a>
          <a href="#" class="card-link">Añadir al carrito</a>`;
        feedNew.append(feed);
    };
}

// PRECIO 

let menosPrecio = document.getElementById('menosPrecio');
let mayorPrecio = document.getElementById('mayorPrecio');
let buscarPrecio = document.getElementById('buscarPrecio');

buscarPrecio.addEventListener('click',()=>{
    let nuevoArray = inventario.filter((element) => ((element.precio >= menosPrecio.value) && (element.precio <= mayorPrecio.value))  );
    console.log(nuevoArray);
})

// FILTROS NUMERICOS

let codigoCompra = document.getElementById("codigoCompra");

codigoCompra.addEventListener("change",vericicacionNumerica = () =>{
    if(isNaN(codigoCompra.value)){
        alert('Ingrese Números')
    }
});

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
tipoRopa.addEventListener("change", MostrarTipoRopa = () =>{ cTotal(tipoRopa.value); })

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

// FILTRO PRECIO MAYOR O MENOR

localStorage.getItem
// CANTIDAD TOTAL

let tipo;
let f=0;
let k=0;
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
    precioFinal.forEach(element => {
        k=precioFinal[element];
        f+=k;
        console.log(Number(f));
    });
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
