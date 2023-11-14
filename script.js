let ham= document.getElementById('hamburger');
let nav= document.getElementById('navbar');
const togglebg=()=>{
    nav.classList.toggle('bg-black')
}
ham.addEventListener('click', togglebg)

const toggleNavbarbg=()=>{
    if(window.scrollY>100){
        nav.style.background= `black`;
    }
    else{
        nav.style.background= `transparent`;
    }
}
window.addEventListener('scroll', toggleNavbarbg)
