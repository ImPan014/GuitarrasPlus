// Cargar el archivo JSON
const url = 'guitarras.json';

// Parsear el archivo JSON
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Seleccionar el elemento HTML
        const guitarraDiv = document.getElementById('tabla-guitarras');

        // Recorrer los elementos del objeto
        let html = '';
        data.forEach(guitarra => {
            //html += `<tr><td>${guitarra.nombre}</td><td>${guitarra.color}</td><td>${guitarra.precio}</td></tr>`;
            html += `
            <div class ="guitarra">
            <img src="${guitarra.imagen}" alt="" class="img-guitarra">
            <h3>${guitarra.nombre}</h3>
            <p>${guitarra.precio}</p>
            <p>${guitarra.color}</p>
            </div>`;
        });

        // Agregar el HTML generado
        guitarraDiv.innerHTML = html;
    });


// Mostras guitarras electricas
var miBoton = document.getElementById("Electricas");
miBoton.addEventListener("click", function () {
    // Seleccionar el elemento HTML
    const guitarraDiv = document.getElementById('tabla-guitarras');
    guitarraDiv.innerHTML = "";
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Recorrer los elementos del objeto
            let html = '';
            data.forEach(guitarra => {
                if (guitarra.tipo === "electrica") {
                    //html += `<tr><td>${guitarra.nombre}</td><td>${guitarra.color}</td><td>${guitarra.precio}</td></tr>`;
                    html += `
                    <div class ="guitarra">
                        <img src="${guitarra.imagen}" alt="" class="img-guitarra">
                        <h3>${guitarra.nombre}</h3>
                        <p>${guitarra.precio}</p>
                        <p>${guitarra.color}</p>
                    </div>`;
                }
            });

            // Agregar el HTML generado
            guitarraDiv.innerHTML = html;
        });
});