const informacion = [
    {
        id: 'RAMON LISTA',
        nombre: 'Ramon Lista',
        cabecera: 'Gral. Mosconi',
        precipitaciones: 'entre 800 y 700 mm anuales',
    },
    {
        id: 'BERMEJO',
        nombre: 'Bermejo',
        cabecera: 'Laguna Yema',
        precipitaciones: 'entre 900 y 800 mm anuales'
    },
    {
        id: 'MATACOS',
        nombre: 'Matacos',
        cabecera: 'Ingeniero Juarez',
        precipitaciones: 'entre 800 y 700 mm  anuales'
    },
    {
        id: 'PATINO',
        nombre: 'Patiño',
        cabecera: 'Comandante Fontana',
        precipitaciones: 'entre 1000 y 900 mm anuales'
    },
    {
        id: 'PILAGAS',
        nombre: 'Pilagas',
        cabecera: 'El Espinillo',
        precipitaciones: 'entre 1100 y 1000 mm anuales'
    },
    {
        id: 'PILCOMAYO',
        nombre: 'Pilcomayo',
        cabecera: 'Clorinda',
        precipitaciones: 'entre 1200 y 1100 mm anuales'
    },
    {
        id: 'PIRANE',
        nombre: 'Pirané',
        cabecera: 'Pirané',
        precipitaciones: 'entre 1100 y 1000 mm anuales'
    },
    {
        id: 'FORMOSA',
        nombre: 'Formosa',
        cabecera: 'Formosa',
        precipitaciones: 'entre 1200 y 1100 mm anuales'
    },
    {
        id: 'LAISHI',
        nombre: 'Laishi',
        cabecera: 'San Francisco de Laishi',
        precipitaciones: 'entre 1200 y 1100 mm anuales'
    }
];

function mostrarInfo(informacion, departamento) {    

    for (let i = 0; i < informacion.length; i++) {
        if (departamento === informacion[i].id) {
            info.innerHTML = `
                <h2>${informacion[i].nombre}</h2>
                <p><b>Cabecera:</b> ${informacion[i].cabecera}</p>
                <p><b>Precipitaciones:</b> ${informacion[i].precipitaciones}
            `;
            break;
        }
    }

}

const info = document.querySelector('.info');

const departamentos = document.querySelectorAll('.departamentos');
departamentos.forEach(departamento => {
    departamento.addEventListener('click', () => {        
        mostrarInfo(informacion, departamento.id)
    });
});

const mapa = document.querySelector('#mapa');

const svg = document.querySelector('svg');
const precipitaciones = document.querySelector('#precipitaciones');
precipitaciones.addEventListener('click', () => {
    svg.remove();
    const img = document.createElement('img');
    const divMapa = document.createElement('div');
    divMapa.setAttribute('id', 'contentmapa');
    img.src = 'img/precipitaciones_balance_hidrico.png';
    img.alt = 'Mapa de precipitaciones';
    if (mapa.querySelector('#contentmapa')) {
        mapa.querySelector('#contentmapa').remove();
    }
    mapa.appendChild(divMapa);
    divMapa.appendChild(img);
})

const climasynucleos = document.querySelector('#climasynucleos');
climasynucleos.addEventListener('click', () =>{
    svg.remove();
    const img = document.createElement('img');
    const divMapa = document.createElement('div');
    divMapa.setAttribute('id', 'contentmapa');
    img.src = 'img/tipos_y_variedades_de_climas_y_nucleos_climaticos.png';
    img.alt = 'Mapa de tipos y variedades de clima y nucleos climaticos';
    if (mapa.querySelector('#contentmapa')) {
        mapa.querySelector('#contentmapa').remove();
    }
    mapa.appendChild(divMapa);
    divMapa.appendChild(img);
});

const mapaformosa = document.querySelector('#mapaformosa');
mapaformosa.addEventListener('click', () =>{
    location.reload();
});