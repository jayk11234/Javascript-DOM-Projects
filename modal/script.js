//variables

let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modalContainer = document.getElementById("modal-container");

//Event Listeners

openBtn.addEventListener('click', function(){

    modalContainer.style.display = 'block';
    modalContainer
    

});

closeBtn.addEventListener('click',function(){

    modalContainer.style.display ='none';
})

modalContainer.addEventListener('click',function(){
    modalContainer.style.display ='none';   
})
