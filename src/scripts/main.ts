import '../styles/main.scss' 
import '@fortawesome/fontawesome-free'
const container = document.querySelector('.content-container');
const textContainer = document.querySelector('.description');
const headingContainer = document.querySelector('.main-focus-header--container');
const desigElement = document.querySelector('.design');
const scrollTo = document.querySelector('#design');
// let scrollValue = 0;
let scrollValue;
const img = document.querySelector('#programming img');
const descrip = document.querySelector('.description-nonOpacity');
let ListOfElements = document.querySelectorAll(".content-container, #programming img, .description,.description-nonOpacity, .education--container") 
window.onload = () => {
    headingContainer.classList.add('fade-in')
}
scrollValue = window.scrollY;
document.addEventListener('scroll', (e) => {
    //console.log(`%c scrollValue ${scrollValue}`,'color:red')
    

     fadeOutIn(ListOfElements)

    // console.log(container.scrollHeight)
    // console.log(window.scrollY)
    // if(window.scrollY >= 176){
    //     container.classList.add('animateit')
    //     textContainer.classList.add('fade-in')
    // }
    // if(window.scrollY >= 600){
    //     img.classList.add('fade-in');
    //     descrip.classList.add('fade-in');
    // }
})
// window.scroll({
//     top:0,
//     left:0,
//     behavior:'smooth'
// })

desigElement.addEventListener('click', () =>{
    scrollTo.scrollIntoView(
        {
            behavior:'smooth',
            block:'end',
            inline:'nearest'

        }
    );
})

const fadeOutIn = (fadeInElements) => {
    //console.log()
    fadeInElements.forEach(fadeInElements => {
        var _this = fadeInElements as Element;
        //console.log(`%c scrollHeight ${_this.scrollHeight}`,'color:white')

        if(window.scrollY >= _this.scrollHeight){
            _this.classList.add('fade-in')
            _this.removeAttribute('style');
             //console.log("Added Fade-in to Element:", _this)
            // console.log("Element scrol height:", _this.scrollHeight)
        }
      else if (window.scrollY <= (_this.scrollHeight - _this.scrollHeight / 3)){
             _this.style.opacity = '0';
              _this.classList.remove('animateit')
             //console.log("Removed Fade-in to Element:", _this)
            // console.log("Element scrol height:", _this.scrollHeight)
        }
        if(_this.classList.contains('content-container')){
            container.classList.add('animateit')
        }  
    });
      
       
   
}

document.querySelector("#about h3").addEventListener('click', () => {
    document.querySelectorAll(".about-li:nth-child(odd)").forEach( (element) => {
        element.classList.add('slideitright')
    })
    document.querySelectorAll(".about-li:nth-child(even)").forEach( (element) => {
        element.classList.add('slideitleft')
    })
})

    
    var aboutusblock = document.querySelector(".about-us-card");
    aboutusblock.addEventListener('click', (e) => {
        aboutusblock.classList.add("slidedown");
    })
