


/*------------------Despliegue de nav */
const navTogg=document.querySelector(".nav-toggler");
navTogg.addEventListener("click", ()=>{
    HideSection();
    toggleNavnab();
})

function HideSection(){
    document.querySelector("section.active").classList.toggle("fade-out")
}

function toggleNavnab(){
document.querySelector(".header").classList.toggle("active");
}

function HideScroll(){
    document.body.classList.toggle("hide-scrolling");
}

/*--------------Activacion section*/
document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        //activacion overlay
        
        navTogg.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavnab();
        }
        else{
           HideSection();
           document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navTogg.classList.remove("hide");
            

        },500);
    }
});

/*-------------------Acerca de mi tabs*/
const tabscont = document.querySelector(".about-tabs"),
aboutSection= document.querySelector(".about-section");


tabscont.addEventListener("click", (e) =>{


     if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
         tabscont.querySelector(".active").classList.remove("active");
         e.target.classList.add("active");
         const target = e.target.getAttribute("data-target");
         aboutSection.querySelector(".tab-content.active").classList.remove("active");
         aboutSection.querySelector(target).classList.add("active");

     }

});

/* -------------Portafolio Item Detalles */

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        PortafolioPopup();
        PortaItemDetails(e.target.parentElement);
    }


})

function PortafolioPopup(){
    document.querySelector(".portafolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", PortafolioPopup);

//CLick fuera de la seccion, volvera al menu
document.addEventListener("click", (e) =>{
if(e.target.classList.contains("pp-inner")){
    PortafolioPopup();
    document.querySelector(".portafolio-popup").scroll(0.0);
    portafolioitem(e.target.parentElement);
}
});

function PortaItemDetails(portafolioitem){
document.querySelector(".pp-thumbnail img").src= 
portafolioitem.querySelector(".porta-item-thumbnail img").src;

document.querySelector(".pp-header h3").innerHTML=
portafolioitem.querySelector(".porta-item-title").innerHTML;

document.querySelector(".pp-body").innerHTML=
portafolioitem.querySelector(".portafolio-item-details").innerHTML;
}


