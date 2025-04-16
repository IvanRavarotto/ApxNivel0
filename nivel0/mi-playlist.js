const miPlaylist = [
    {
        titulo: "¿Qué es un string?",
        url: "https://www.youtube.com/watch?v=lC9YaFXSAg0",
        resumen: "Video explicativo de que es un string y como se utiliza en JavaScript.",
        tags: ["Programación", "JavaScript", "String"],
        visto: true,
        dificultad: 2
    }, {
        titulo: "El mejor lenguaje de programación para empezar",
        url: "https://www.youtube.com/watch?v=bo3AnDcRY3o",
        resumen: "Video explicativo de porque es recomendable iniciar con JavaScript.",
        tags: ["Programación", "JavaScript", "Lenguaje"],
        visto: true,
        dificultad: 2
    }, {
        titulo: "Cpas de software",
        url: "https://www.youtube.com/watch?v=-Mg1ivgT_gM",
        resumen: "Video explicativo del crecimiento de la programación durante los años y sus capas internas.",
        tags: ["Programación", "JavaScript", "Historia"],
        visto: true,
        dificultad: 3
    }, {
        titulo: "Mi primera línea de código",
        url: "https://www.youtube.com/watch?v=IC4c_XOCDGw",
        resumen: "Video explicativo de la primera línea de codigo clasica 'Hello World' y su significado.",
        tags: ["Programación", "JavaScript", "Hello World"],
        visto: true,
        dificultad: 1
    }, {
        titulo: "Operar con valores en JavaScript",
        url: "https://www.youtube.com/watch?v=7my5WwSnWiI",
        resumen: "Video explicativo de como operar con valores en JavaScript.",
        tags: ["Programación", "JavaScript", "Operaciones"],
        visto: true,
        dificultad: 3
    }
];

// Reporte
// Cantidad de videos
console.log('Cantidad de videos en la playlist:', miPlaylist.length);
// Datos del primer video
console.log('Primer video - Título:', miPlaylist[0].titulo);
console.log('Primer video - URL:', miPlaylist[0].url);
console.log('Primer video - Resumen:', miPlaylist[0].resumen);
console.log('Primer video - Tags:', miPlaylist[0].tags.join(', '));
console.log('Primer video - Visto:', miPlaylist[0].visto);
console.log('Primer video - Dificultad:', miPlaylist[0].dificultad);
// Datos del último video
console.log('Último video - Título:', miPlaylist[miPlaylist.length - 1].titulo);
console.log('Último video - URL:', miPlaylist[miPlaylist.length - 1].url);
console.log('Último video - Resumen:', miPlaylist[miPlaylist.length - 1].resumen);
console.log('Último video - Tags:', miPlaylist[miPlaylist.length - 1].tags.join(', '));
console.log('Último video - Visto:', miPlaylist[miPlaylist.length - 1].visto);
console.log('Último video - Dificultad:', miPlaylist[miPlaylist.length - 1].dificultad);

//Gist: https://gist.github.com/IvanRavarotto/876e01e8396e41d2d0d2284167158667