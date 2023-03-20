// Cargar el archivo JSON
const url = 'guitarras.json';

// Parsear el archivo JSON
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Seleccionar el elemento HTML
        const tabla = document.getElementById('tabla-guitarras');

        // Recorrer los elementos del objeto
        let html = '<tr><th>Nombre</th><th>Color</th><th>Precio</th></tr>';
        data.forEach(guitarra => {
            html += `<tr><td>${guitarra.nombre}</td><td>${guitarra.color}</td><td>${guitarra.precio}</td></tr>`;
        });

        // Agregar el HTML generado
        tabla.innerHTML = html;
    });
