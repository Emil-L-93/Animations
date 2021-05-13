import '../styles/main.scss'
const container = document.querySelector('.content-container');
const headingContainer = document.querySelector('.main-focus-header--container');
const desigElement = document.querySelector('.design');
const scrollTo = document.querySelector('#design');
const arr: string[] = Array<string>("", "");
const arr2: string[] = ["ett", "wtt"];
const arr3 = new Array(30);
// let scrollValue = 0;
for (let item in arr2) {
    console.log(item);
}
var nuarr = Array<Number>();
for (var i = 1; i < arr3.length; i++) {
    let random = Math.floor(Math.random() * i)
    nuarr.push(random);

    // console.log()
}

// console.log(nuarr.filter((v,i,a) => a.indexOf(v) === i))
let scrollValue;
let ListOfElements = document.querySelectorAll(".content-container, #programming img, .description,.description-nonOpacity, .education--container")

window.onload = () => {
    headingContainer.classList.add('fade-in')
}
scrollValue = window.scrollY;
const sections = document.querySelectorAll('section, header, footer')
//Create observe options
let options = {
    root: null, // it is the viewport if null,
    rootMargin: '10px',
    threshold: .5 // 1 means when 100% of the of the target is visible within
    // the element soecifield by the root option the callback is invoked
}
const sectionDotHolder = document.querySelector('.navigation--dots');
//Create new instance of IntersectionObserver
let observer = new IntersectionObserver(function (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries?.forEach(entry => {
        let sectionDot: Element = document.querySelector(`.${entry.target.id}-dot`)
        if (`${entry.target.id}-dot` === sectionDot.id && entry.isIntersecting) {
            sectionDot.firstElementChild.classList.add('active')
            entry.target.firstElementChild.classList.add('fade-in')
            container.classList.add('animateit')
        } else {
            //  entry.target.firstElementChild.classList.remove('fade-in')
            sectionDot.firstElementChild.classList.remove('active')
        }

    })
}, options);
//foreach section / Element we observe the element
sections.forEach(section => {
    let dot = ` <a href="#${section.id}" id="${section.id}-dot" class="navigation--dot ${section.id}-dot"><li></li></a>`;
    sectionDotHolder.insertAdjacentHTML('beforeend', dot);
    observer.observe(section)
});
//console.log(`%c scrollValue ${scrollValue}`,'color:red')

window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
})

document.querySelector("#about h3").addEventListener('click', () => {
    document.querySelectorAll(".about-li:nth-child(odd)").forEach((element) => {
        element.classList.add('slideitright')
    })
    document.querySelectorAll(".about-li:nth-child(even)").forEach((element) => {
        element.classList.add('slideitleft')
    })
})


var aboutusblock = document.querySelectorAll(".about-li");
aboutusblock.forEach((element) => {
    element.addEventListener('click', (e) => {
        var target = e.target as Element;
        target?.classList.add("slidedown");
    })
})


//start on click full image

var cardImage = document.querySelectorAll('.card--image');
cardImage.forEach((element) => {
    element.addEventListener('click', (e) => {
        var target = e.target as Element;
        target?.classList.add("rotate")
    })
})

    // var section = document.querySelectorAll('.navigation--dot li');
    // section.forEach((element) => {
    //     console.log("1")
    //     element.addEventListener('click', (e) =>{
    //         var target = e.target as Element;
    //         target.classList.add('active')
    //         // target.parentNode.previousSibling.childNodes.classList.remove('active')
    //         // var te = getSiblings(element)
    //         // element.nextElementSibling.firstElementChild.classList.remove('active')
    //     })
    //     // console.log("W", element)
    // })
const fruits = [{"name":"banana"}, {"name":"apple"}, {"name":"orange"}, {"name":"kiwi"}];

// console.log(fruits.map(fruit => fruit.toLocaleUpperCase()))
console.log(fruits.filter(n => n.name == "banana"))
console.log(fruits.map(f => f.name).sort())
