const paraslide = document.querySelector('.cara-slide'); 
const paraimages = document.querySelectorAll('.cara-slide img'); 
const prevBtn = document.querySelector("#prevbtn"); 
const nextBtn = document.querySelector("#nextbtn"); 
let counter = 1; 
const size = paraimages[0].clientWidth;  
paraslide.style.transform = 'translateX(' + (-size*counter) + 'px)'; 
nextBtn.addEventListener('click',()=>{  
    if (counter >= paraimages.length-1) return; 
    paraslide.style.transition = "transform 0.4s ease-in-out"; 
    counter++;  
    paraslide.style.transform = 'translateX(' + (-size*counter) + 'px)';  


});  
prevBtn.addEventListener('click',()=>{  
  if (counter<=0) return;
  paraslide.style.transition = "transform 0.4s ease-in-out"; 
  counter--;  
  paraslide.style.transform = 'translateX(' + (-size*counter) + 'px)';  
});  
paraslide.addEventListener('transitionend', ()=>{ 
      if(paraimages[counter].id === 'lastclone'){ 
        paraslide.style.transition = "none"; 
        counter = paraimages.length-2; 
        paraslide.style.transform = 'translateX(' + (-size*counter) + 'px)';  
      }  
      if(paraimages[counter].id === 'firstclone'){ 
        paraslide.style.transition = "none"; 
        counter = paraimages.length-counter; 
        paraslide.style.transform = 'translateX(' + (-size*counter) + 'px)';  
      }  
       
      


});  
function det(){ 
  document.getElementsByClassName("details");
}

