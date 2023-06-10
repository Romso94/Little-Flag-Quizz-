

document.addEventListener("DOMContentLoaded", function(){

    var traveler = document.getElementById('traveler');
    
})


function startAnimation (){
    traveler.classList.add("walking");
}

function stopAnimation() {
    traveler.classList.remove("walking");
}



let scrollTimeout;



document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementsByClassName('out-wrapper')[0];

  if (container) {
    container.addEventListener('scroll', handleScroll);
  }

  
});

function handleScroll(event) {
  
  clearTimeout(scrollTimeout);
  
  startAnimation();
  
  scrollTimeout = setTimeout(function() {
    
    stopAnimation();
    

    
  }, 200);
}

