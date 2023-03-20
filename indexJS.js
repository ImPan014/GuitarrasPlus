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
            <div>
            <h3>${guitarra.nombre}</h3>
            <img src="" alt="">
            <p>${guitarra.precio}</p>
            <p>${guitarra.color}</p>
            </div>`;
        });

        // Agregar el HTML generado
        guitarraDiv.innerHTML = html;
    });
