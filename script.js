
function rotate_page(){
    document.getElementById("pg");
    pg.style.transform="rotate(-15deg)";
    pg.style.transition="ease-in-out 0.7s"

    document.getElementById("circle");
    circle.style.transform="rotate(-90deg)";
    circle.style.transition="ease-in-out 0.7s"
}


function rotate_page_reverse(){
    document.getElementById("pg");
    pg.style.transform="rotate(0deg)";
    pg.style.transition="ease-in-out 0.7s"

    document.getElementById("circle");
    circle.style.transform="rotate(0deg)";
    circle.style.transition="ease-in-out 0.7s";
}

function slide_bar(){
    let home=document.getElementById("home");
    let about=document.getElementById("about");
    let contact=document.getElementById("contact")

    home.style.transform="translateX(130px)";
    home.style.transition="ease-in-out 0.7s 0.3s"

    about.style.transform="translateX(140px)";
    about.style.transition="ease-in-out 0.7s 0.3s"

    contact.style.transform="translateX(150px)";
    contact.style.transition="ease-in-out 0.7s 0.3s";
    
}



function reverse_slide_bar(){
    let home=document.getElementById("home");
    let about=document.getElementById("about");
    let contact=document.getElementById("contact")

    home.style.transform="translateX(50px)";
    home.style.transition="ease-in-out 0.7s"

    about.style.transform="translateX(50px)";
    about.style.transition="ease-in-out 0.7s"

    contact.style.transform="translateX(50px)";
    contact.style.transition="ease-in-out 0.7s";
}


function bubble(){
    let box1 =document.querySelector(".box1");
    let box2 =document.querySelector(".box2");
    let box3 =document.querySelector(".box3");

    box1.style.transform="translate(130px,500px)";
    box1.style.height="100px";
    box1.style.width="100px";
    box1.style.transition="ease-in-out 0.5s";

    box2.style.transform="translateY(500px)";
    box2.style.height="100px";
    box2.style.width="100px";
    box2.style.transition="ease-in-out 0.5s";

    box3.style.transform="translate(-130px,500px)";
    box3.style.height="100px";
    box3.style.width="100px";
    box3.style.transition="ease-in-out 0.5s";
    
}

function reverse_bubble(){
    let box1 =document.querySelector(".box1");
    let box2 =document.querySelector(".box2");
    let box3 =document.querySelector(".box3");
   

    box1.style.transform="translate(0)";
    box1.style.height="50px";
    box1.style.width="50px";
    box1.style.transition="ease-in-out 0.5s";


    box2.style.transform="translateY(0)";
    box2.style.height="50px";
    box2.style.width="50px";
    box2.style.transition="ease-in-out 0.5s";

    box3.style.transform="translate(0)";
    box3.style.height="50px";
    box3.style.width="50px";
    box3.style.transition="ease-in-out 0.5s";
    
}