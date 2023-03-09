import hamburguerMenu from "./hamburger.js";
import animationSkills from "./observer.js"

const d = document;
const header = d.getElementById('header')


d.addEventListener("DOMContentLoaded", (e) => {
  const titlesDecoration = d.querySelectorAll('h2')
  const titleInfPersonal = d.querySelector('.about__info-title')
  titleInfPersonal.dataset.lineDecoration = ""

  for (let title of titlesDecoration) {
    if (title.classList.contains('title2')) {
      title.dataset.lineDecoration = ""
    }
  }
  hamburguerMenu('.btn-hamburger', '.nav')
  animationSkills();
});


addEventListener('scroll', ()=> {
  const verticalScroll = window.pageYOffset
  const verticalScrollZero = window.pageYOffset == 0

  if (header.classList.contains('header-down') && verticalScroll > 5) {
    return;
  }
  if(verticalScroll > 5) {
    header.classList.add('header-down')
    header.classList.add('header-reduce')
  } else if (verticalScrollZero) {
    header.classList.remove('header-down')
    header.classList.remove('header-reduce')
  }
} )


const containerPortfolioImg = d.querySelector('.container-img-portfolio');
const childrensBox = containerPortfolioImg.children
console.log(childrensBox.length, childrensBox)
let click = 0
const modal = d.querySelector("#modal"),
  arrowBefore = d.querySelector('#arrow-before'),
  arrowAfter = d.querySelector('#arrow-after')
let index = null

function removeEvent (e) {
  // console.log('Evento Remove')
  // console.log('Target', e.target)
  // console.log('Target == modal: ', e.target == modal)
  if (e.target == modal) {
    // console.log('Se hizo click en modal')
    modal.classList.toggle('active-modal')
    d.querySelector('.modal__img').removeAttribute('alt')
    d.querySelector('.modal__img').removeAttribute('src');
    modal.removeEventListener('click', removeEvent)
  }
  else {
    // console.log('Se hizo click fuera del modal')
    if (e.target == arrowBefore) {
      if (index > 0) {
        d.querySelector('.modal__img').setAttribute('src', childrensBox[index-1].children[0].src);
        index--
        console.log('Index:', index)
      }
    } else if (e.target == arrowAfter) {
      if (index < childrensBox.length -1) {
        d.querySelector('.modal__img').setAttribute('src', childrensBox[index+1].children[0].src);
        index++
        console.log('Index:', index)
      } 
    }
  }
}

function closeModal () {
  console.log('Modal ? = ', modal)
  modal.addEventListener('click', removeEvent)
}

function createaIMG (alt, source) {
  let img = d.createElement('img')
  img.setAttribute('alt', alt)
  img.setAttribute('src', source)
  img.classList.add('modal__img')
  return img
}

const openLightBox = (e, target)=> {
  console.log('Openlight funcion')
  const alt = target.children[0].alt,
      source = target.children[0].src;
  console.log(alt, source)
  
  let img = createaIMG (alt, source)
  // console.log("modal.children 0: ",modal.children[0])
  if(modal.children[1].nodeName !== 'IMG' ) {
    modal.children[0].insertAdjacentElement('afterend', img)
    modal.classList.toggle('active-modal')
  }
  else {
    const image = modal.querySelector('.modal__img')
    modal.classList.toggle('active-modal')
    image.setAttribute('alt', alt)
    image.setAttribute('src', source)
  }
  closeModal()
}

const openLightboxEvent = ()=> {
  containerPortfolioImg.addEventListener('click', (e) => {
    if (e.target !== containerPortfolioImg) {
      let target = null;
      console.log(e)
  
      if (e.target.classList.contains('portfolio__description') || e.target.classList.contains('portfolio__name')) {
        console.log(e.target.parentElement.parentElement)
        target = e.target.parentElement.parentElement
      } else {
        console.log(e.target.parentElement)
        target = e.target.parentElement
      }
      
      if (target !== null) {
        for (let i=0; i <= (childrensBox.length -1); i++) {
          console.log(childrensBox[i].children[0])
          if (childrensBox[i] == target) {
            console.log(childrensBox[i].children[0])
            index = i;
            break;
          }
        }
        openLightBox(e, target)
      };
    }
  })
  
}

openLightboxEvent()

const menu = d.querySelector('#menu')

menu.addEventListener('click', (e)=> {
  if (e.target.classList.contains('menu__link')) {
    e.preventDefault();
    let target = e.target.getAttribute('href');
    d.querySelector(target).scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
})


// <!-- <button class="btn btn--contact">Contáctame</button> -->
//           <!-- <button class="btn btn--cv">Descargar Cv</button> -->