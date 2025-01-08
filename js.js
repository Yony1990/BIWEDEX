
$(document).ready(function(){

  $("a").on('click', function(e) {

    if (this.hash !== "") {

      e.preventDefault();


      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        window.location.hash = hash;
      });
    } 
  });
});


/* modal Servicios */

const noModal = document.querySelector('.no-modal');
const modal1 = document.querySelector('.modal-1');
const modal3 = document.querySelector('.modal-3');
const modal2 = document.querySelector('.modal-2');

const webCodeImg = document.getElementById('webCodeImg');
const webCode = document.getElementById('webCode');
const webCodeAll = document.getElementById('webCodeAll');

const manteServiImg = document.getElementById('manteServiImg');
const manteServi = document.getElementById('manteServi');
const manteServiAll = document.getElementById('manteServiAll');

const marketinImg = document.getElementById('marketinImg');
const marketin = document.getElementById('marketin');
const marketinAll = document.getElementById('marketinAll');


// open

const openModal1 = () => {
  modal1.style.display = 'flex';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  webCodeAll.classList.add('active');
  marketinAll.classList.remove('active');
  manteServiAll.classList.remove('active');
}

const openModal3 = () => {
  modal3.style.display = 'flex';
  modal2.style.display = 'none';
  modal1.style.display = 'none';
  marketinAll.classList.add('active');
  webCodeAll.classList.remove('active');
  manteServiAll.classList.remove('active');
}

const openModal2 = () => {
  modal2.style.display = 'flex';
  modal3.style.display = 'none';
  modal1.style.display = 'none';
  marketinAll.classList.remove('active');
  webCodeAll.classList.remove('active');
  manteServiAll.classList.add('active');
}


document.addEventListener ('click', (e) => {
     // open
    if(e.target === webCode || e.target === webCodeImg) {
      openModal1();
    }

    if(e.target === marketin || e.target === marketinImg) {
      openModal3();
    }

    if(e.target === manteServi || e.target === manteServiImg) {
      openModal2();
    }
    

})


let scrollPrinci = window.pageYOffset;

let navbar = document.querySelector('.navBar');
// let headerClass = document.querySelector('.header');

let logo = document.querySelector('.logo');


// function removeClassFromHeaderOnResize() {
//   // Selecciona el header con la clase 'varB'
//   const header = document.querySelector('header'); 

//   // Verifica si el header existe
//   if (header) {
//       // Llama a la función para comprobar el ancho cada vez que la ventana cambie de tamaño
//       window.addEventListener('resize', function() {
//           // Obtiene el ancho de la ventana
//           const windowWidth = window.innerWidth;

//           // Si el ancho es menor o igual a 800px, remueve la clase 'varB'
//           if (windowWidth <= 800) {
//               header.classList.remove('navBar');
//           }
//       });
//   }
// }

window.addEventListener('scroll', function () {
  let scrollActual = window.pageYOffset;
  // console.log (scrollActual)
  
    if (window.innerWidth >= 769) {
        if (scrollPrinci > scrollActual) {
          navbar.style.top = '0px';
        }
        else {
          navbar.style.top = '-69.5px';
        }
        scrollPrinci = scrollActual
    }

    
  
})

document.addEventListener ('mouseover', (e) => {
    if (e.target === navbar || e.target === logo) {
      navbar.style.top = '0px';
    }
})


const menux= document.getElementById('menux');
const ham = document.querySelector('.ham');
const top1 = document.querySelector('.top');
const middle = document.querySelector('.middle');
const bottom = document.querySelector('.bottom');
const menu = document.querySelector('menu');
const a1 = document.querySelector ('.a1');
const a2 = document.querySelector ('.a2');
const a3 = document.querySelector ('.a3');
const a4 = document.querySelector ('.a4');
const a5 = document.querySelector ('.a5');
const act = document.querySelector ('.active');


document.addEventListener ('click', (e) => {
    if (e.target === ham || e.target === top1 || e.target === middle || e.target === bottom || e.target === menu || e.target === a1 || e.target === a2|| e.target === a3 || e.target === a4 || e.target === a5 ) {
      menux.classList.toggle('active');
      menu.classList.toggle('active');
    }
    // if (e.target === menu || e.target === a1 || e.target === a2|| e.target === a3 || e.target === a4 || e.target === a5 ) {
    //   menu.classList.toggle('active');
    //   menux.classList.toggle('active');
    // }

})