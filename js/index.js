// Datos de ejemplo de cotizaciones
const cotizaciones = {
    compra: [
        { tipo: "Dólar Oficial", precio: 984.00 },
        { tipo: "Dólar Blue", precio: 1110.00 },
        { tipo: "Dólar Tarjeta", precio: 1639.20},
        { tipo: "Dólar MEP", precio: 1076.20 }
    ],
    venta: [
        { tipo: "Dólar Oficial", precio: 1024.50 },
        { tipo: "Dólar Blue", precio: 1130.00 },
        { tipo: "Dólar Tarjeta", precio: 0.00 },
        { tipo: "Dólar MEP", precio: 1077.60 }
    ]
};

// Función para generar las filas de a dos
function generarFilasDeDos(cotizacionesArray) {
    const formatoArg = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' });
    let filas = '';
    for (let i = 0; i < cotizacionesArray.length; i += 2) {
        filas += `<tr>`;
        filas += `<th>${cotizacionesArray[i].tipo}</th>`;
        filas += `<th>${cotizacionesArray[i + 1]?.tipo || ''}</th>`;
        filas += `</tr>`;
        filas += `<tr>`;
        filas += `<td class="precio">${formatoArg.format(cotizacionesArray[i].precio)}</td>`;
        filas += `<td class="precio">${cotizacionesArray[i + 1] ? formatoArg.format(cotizacionesArray[i + 1].precio) : ''}</td>`;
        filas += `</tr>`;
    }
    return filas;
}

// Función para mostrar las cotizaciones
function mostrarCotizaciones() {
    const container = document.getElementById("card-container");
    container.innerHTML = ''; 

    // Crear y mostrar la card de Valores Compra
    const cardCompra = document.createElement("div");
    cardCompra.classList.add("card");
    cardCompra.innerHTML = `
        <h2>Valores Compra</h2>
        <table class="table">
            ${generarFilasDeDos(cotizaciones.compra)}
        </table>
    `;
    container.appendChild(cardCompra);

    // Crear y mostrar la card de Valores Venta
    const cardVenta = document.createElement("div");
    cardVenta.classList.add("card");
    cardVenta.innerHTML = `
        <h2>Valores Venta</h2>
        <table class="table">
            ${generarFilasDeDos(cotizaciones.venta)}
        </table>
    `;
    container.appendChild(cardVenta);
}

// Ejecutar la función en la pagina
mostrarCotizaciones();





