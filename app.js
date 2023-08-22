let toggleButton =document.querySelector('#toggle-btn');
let toggleButtonLabel =document.querySelector('#toggle-btn-label');
let Navbar =document.querySelector('#navbar');
let navlinks =document.querySelectorAll('a.nav-links');
var index =0;
var changecolor =["black","white"];
var changecolor2 =["white","black"];

function changetheme(){
    document.body.style.backgroundColor=changecolor[index];
    
    index++;
    if(index>changecolor.length-1){
        index=0;
    }
    if(index==0){
        toggleButtonLabel.innerText ="Change black Theme";
        
    }
    else{
        toggleButtonLabel.innerText ="Change white Theme";
    }
    toggleButtonLabel.style.color =changecolor2[index];
}

changetheme();
function changeNavbarcolor(){
    Navbar.style.backgroundColor = changecolor[index];

    for(let i=0;i<navlinks.length;i++){
    navlinks[i].style.color =changecolor2[index];
    }
}

changeNavbarcolor();


toggleButton.addEventListener('click',()=>{
    changetheme();
    changeNavbarcolor();
})