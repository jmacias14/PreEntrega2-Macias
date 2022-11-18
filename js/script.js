//Logeo a consola la info de los impuestos, para a futuro tener referencia de los datos y agregarlos al HTML

class impuesto {
    constructor(nombreImpuesto,valor,porcentaje){
    this.nombreImpuesto = nombreImpuesto;
    this.valor = valor;
    this.porcentaje = porcentaje;
    this.infoImpuesto = function() {console.log("El impuesto " + this.nombreImpuesto + " suma un " + this.porcentaje + "%")}
}
}

const impuesto1 = new impuesto ("Basico", 0.25, 25);
const impuesto2 = new impuesto ("Provincial", 0.30,30);


function calcularImpuestoNew () {
    let precioSinImp = document.forms["calculadoraPrecio"]["precioJuego"].value;
    const impuestoTotales = [impuesto1.valor,impuesto2.valor]
    let valorImpuesto = 0
    let precioFinal = 0
    impuestoTotales.forEach((num)=>{
        valorImpuesto = (valorImpuesto + (precioSinImp*(num)))
        precioFinal = Number(precioSinImp) + Number(valorImpuesto)
    }
    
    )
    document.getElementById("campoPrecioFinal").innerHTML = '$' + (precioFinal).toFixed(2) + '';
    document.getElementById("campoPrecio").style.display = "block";
    impuesto1.infoImpuesto()
    impuesto2.infoImpuesto()
    
    
}

let botonCalcular = document.getElementById("botonCalcular");
botonCalcular.addEventListener('click', event => {
    calcularImpuestoNew();
    
});




