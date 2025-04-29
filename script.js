const informacion = [
    {
        id: 'RAMON LISTA',
        nombre: 'Ramon Lista',
        cabecera: 'Gral. Mosconi',
        
    },
    {
        id: 'BERMEJO',
        nombre: 'Bermejo',
        cabecera: 'Laguna Yema',
    },
    {
        id: 'MATACOS',
        nombre: 'Matacos',
        cabecera: 'Ingeniero Juarez'
    },
    {
        id: 'PATINO',
        nombre: 'Patiño',
        cabecera: 'Comandante Fontana'
    },
    {
        id: 'PILAGAS',
        nombre: 'Pilagas',
        cabecera: 'El Espinillo'
    },
    {
        id: 'PILCOMAYO',
        nombre: 'Pilcomayo',
        cabecera: 'Clorinda',
    },
    {
        id: 'PIRANE',
        nombre: 'Pirané',
        cabecera: 'Pirané'
    },
    {
        id: 'FORMOSA',
        nombre: 'Formosa',
        cabecera: 'Formosa'
    },
    {
        id: 'LAISHI',
        nombre: 'Laishi',
        cabecera: 'San Francisco de Laishi' 
    }
];

function mostrarInfo(informacion, departamento) {    

    for (let i = 0; i < informacion.length; i++) {
        if (departamento === informacion[i].id) {
            info.innerHTML = `
                <h2>${informacion[i].nombre}</h2>
                <p>Cabecera: ${informacion[i].cabecera}</p>
            `;
            break;
        }
    }

}

const departamentos = document.querySelectorAll('.departamentos');
departamentos.forEach(departamento => {
    departamento.addEventListener('click', () => {        
        mostrarInfo(informacion, departamento.id)
    });
});

const info = document.querySelector('.info');
