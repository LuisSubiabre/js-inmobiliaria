/* Modo Oscuro-Claro*/
const btnModo = document.getElementById("dark");
const html = document.documentElement;
const heroElement = document.querySelector('.hero-bg');


btnModo.addEventListener('click', () => {
   
    if (html.getAttribute('data-theme') === 'dark') {
        html.setAttribute('data-theme', 'light');
        heroElement.style.filter = 'brightness(100%)';
    } else {
        html.setAttribute('data-theme', 'dark');
        heroElement.style.filter = 'brightness(50%)';
    }
});
/* Modo Oscuro-Claro*/

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva ',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678 ',
        habitaciones: 4,
        bathroom: 2,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas ',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456 ',
        habitaciones: 2,
        bathroom: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica ',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 3,
        bathroom: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Cabaña rústica junto al lago",
        src: "https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg",
        descripcion: "Esta cabaña rústica ofrece una experiencia tranquila junto al lago con vistas serenas y naturaleza abundante",
        ubicacion: "456 Lakeside Drive, Tranquil Shores, WA 98765",
        habitaciones: 3,
        bathroom: 2,
        costo: 1500,
        smoke: false,
        pets: true
    },
    {
        nombre: "Ático moderno en la ciudad",
        src: "https://cdn.pixabay.com/photo/2019/10/10/16/48/window-4540033_960_720.jpg",
        descripcion: "Ático moderno con vistas panorámicas de la ciudad y todas las comodidades contemporáneas",
        ubicacion: "123 Skyline Blvd, Urban Center, NY 10101",
        habitaciones: 2,
        bathroom: 1,
        costo: 2200,
        smoke: true,
        pets: false
    },
    {
        nombre: "Casa de campo con jardín",
        src: "https://cdn.pixabay.com/photo/2016/01/23/21/58/new-1158139_960_720.jpg",
        descripcion: "Hermosa casa de campo rodeada de un amplio jardín, ideal para familias y amantes de la naturaleza",
        ubicacion: "321 Country Lane, Green Valley, TX 76543",
        habitaciones: 4,
        bathroom: 3,
        costo: 1800,
        smoke: false,
        pets: true
    }
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo. ',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bathroom: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar ',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789 ',
        habitaciones: 3,
        bathroom: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica ',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 2,
        bathroom: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: "Casa moderna con piscina",
        src: "https://images.unsplash.com/photo-1623298460174-371443cc45f0?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Casa moderna con un diseño elegante y una piscina privada",
        ubicacion: "987 Ocean View Drive, Sunny Beach, FL 34567",
        habitaciones: 3,
        bathroom: 2,
        costo: 3500,
        smoke: false,
        pets: true
      },
      {
        nombre: "Chalet en el bosque",
        src: "https://images.unsplash.com/photo-1509736339112-053f93230c10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENoYWxldCUyMGVuJTIwZWwlMjBib3NxdWV8ZW58MHx8MHx8fDA%3D",
        descripcion: "Chalet acogedor en medio del bosque, ideal para una escapada tranquila",
        ubicacion: "456 Forest Lane, Whispering Pines, OR 67890",
        habitaciones: 4,
        bathroom: 3,
        costo: 2500,
        smoke: true,
        pets: true
      },
      {
        nombre: "Villa con vista al mar",
        src: "https://images.unsplash.com/photo-1605538032432-a9f0c8d9baac?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: "Villa de lujo con impresionantes vistas al mar y acceso directo a la playa",
        ubicacion: "123 Coastal Road, Ocean Breeze, CA 78901",
        habitaciones: 5,
        bathroom: 4,
        costo: 7000,
        smoke: false,
        pets: false
      }
];

const totalEnVenta = propiedades_venta.length;
mostrarVenta = (total = totalEnVenta) => {
    let htmlRender = '';
    const propiedadesVenta = document.getElementById('venta');
    for (propiedad_venta of propiedades_venta.slice(0, total)) {
        htmlRender += `
             <div class="cell">
            <div class="card">
           
             <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${propiedad_venta.src}"
                    alt="Placeholder image" />
                </figure>
                <div class="is-flex is-justify-content-flex-end">
                    <span class="tag is-warning is-light">Venta</span>
                </div>
            </div>
             
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${propiedad_venta.nombre}</p>
                    <p class="is-6">${propiedad_venta.descripcion}</p>
                  </div>
                </div>
                <div class="content">
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${propiedad_venta.ubicacion}</p>
                    
                    <p>
                        <i class="fas fa-bed" aria-hidden="true"></i> ${propiedad_venta.habitaciones} Habitaciones |
                        <i class="fas fa-bath" aria-hidden="true"></i> ${propiedad_venta.bathroom} Baños
                    </p>
                    
                    <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad_venta.costo}</p>
                    
                    <p>${propiedad_venta.smoke ? '<i class="fas fa-smoking has-text-success" aria-hidden="true"></i> <span class="tag is-primary">Permitido fumar </span>' : '<i class="fas fa-smoking-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permite fumar </span>'} </p>

                    <p>${propiedad_venta.pets ? '<i class="fas fa-paw has-text-success" aria-hidden="true"></i> <span class="tag is-primary"> Mascotas permitidas</span>' : '<i class="fas fa-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permiten mascotas </span>'} </p>
  
                </div>
              </div>
            </div>
          </div>
        `;
    }
    propiedadesVenta.innerHTML = htmlRender;
}


const totalEnAlquiler = propiedades_alquiler.length;
mostrarAlquiler = (total = totalEnAlquiler) => {
    let htmlRender = '';
    const propiedadesAlquiler = document.getElementById('alquiler');
    for(propiedad_alquier of propiedades_alquiler.slice(0, total)){
        htmlRender +=  `
             <div class="cell">
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${propiedad_alquier.src}"
                    alt="Placeholder image" />
                </figure>
              </div>
                <div class="is-flex is-justify-content-flex-end">
                    <span class="tag is-info is-light">Alquiler</span>
                </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">${propiedad_alquier.nombre}</p>
                    <p class="is-6">${propiedad_alquier.descripcion}</p>
                  </div>
                  
                </div>
                <div class="content">
                    <p><i class="fas fa-map-marker-alt" aria-hidden="true"></i> ${propiedad_alquier.ubicacion}</p>
                    
                    <p>
                        <i class="fas fa-bed" aria-hidden="true"></i> ${propiedad_alquier.habitaciones} Habitaciones |
                        <i class="fas fa-bath" aria-hidden="true"></i> ${propiedad_alquier.bathroom} Baños
                    </p>
                    
                    <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad_alquier.costo}</p>
                    
                    <p>${propiedad_alquier.smoke ? '<i class="fas fa-smoking has-text-success" aria-hidden="true"></i> <span class="tag is-primary">Permitido fumar </span>' : '<i class="fas fa-smoking-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permite fumar </span>'} </p>

                    <p>${propiedad_alquier.pets ? '<i class="fas fa-paw has-text-success" aria-hidden="true"></i> <span class="tag is-primary"> Mascotas permitidas</span>' : '<i class="fas fa-ban has-text-danger" aria-hidden="true"></i> <span class="tag is-danger"> No se permiten mascotas </span>'} </p>
  
                </div>
              </div>
            </div>
          </div>
        `;
    }
    propiedadesAlquiler.innerHTML = htmlRender;
}
