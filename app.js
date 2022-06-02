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
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1019',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1020',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1021',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1022',color:'diseño'},
{ producto: 'accesorio', precio: '600',talle:'encargo',codigo:'1023',color:'diseño'}]

let guardarLocal = (clave,valor) =>{ localStorage.setItem(clave,valor)};
guardarLocal('inventario',JSON.stringify(inventario));

let objetoComparador = {};

// PEDIR TIPO DE ROPA

let tipoRopa = document.getElementById("tipoRopa");
tipoRopa.addEventListener("change", MostrarTipoRopa = () =>{   objetoComparador.producto = tipoRopa.value });

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

// PEDIR CODIGO

let codigo = document.getElementById("codigoCompra");
codigo.addEventListener("change",tomarCodigo = () =>{
    objetoComparador.codigo =  codigo.value;
    vericicacionNumerica(codigo.value);
})

// FILTROS NUMERICOS

function vericicacionNumerica(a){
    if(isNaN(codigoCompra.value)){
        alert('Ingrese Números')
    }
}

// FUNCION RECIBIDORA DE DATOR E IMPRIMIR HMTML

let botonPedir = document.getElementById('buscar');
botonPedir.addEventListener('click',tomarDatos = () =>{
    console.log(objetoComparador);
    buscadorInventario(objetoComparador);
});

function buscadorInventario(a){
    console.log('este es el nombre del producto',a.producto);
    let array = inventario.filter(i => (i.producto == a.producto) && ((i.talle == a.talle) || (i.color == a.color) || (i.codigo == a.codigo)))
    let resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.innerText = 'resultado de la busqueda: '+ array.length ;
    console.log(array);
    escribirHTML(array);
}

function escribirHTML(a) {
    let catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ``;
    a.forEach(i => {
        let catalogoNew1 = document.createElement('div');
        catalogoNew1.className = "col d-flex justify-content-center ";
        catalogoNew1.innerHTML= `
            <div class="card " style="width: 18rem; height: 23rem; margin:12px;">
                <img src="#" class="card-img-top" alt="tienda1" height="330px" width="280">
                <div class="card-body">
                    <h5 class="card-title">${i.producto}</h5>
                    <p class="card-text">Talles: ${i.talle}</p>
                    <p class="card-text">Color: ${i.color}</p>
                    <p class="card-text">Codigo: ${i.codigo}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$${i.precio}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Comprar</a>
                    <a href="#" class="card-link">Añadir al carrito</a>
                </div>
            </div>` 
        catalogo.appendChild(catalogoNew1); 
    });
} 