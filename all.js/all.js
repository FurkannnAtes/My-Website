    
    /*Scroll navbar  backgraund*/ 
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navGlass").style.backgroundColor= "rgb(255 ,255, 255,0.8)";
        document.getElementById("navGlass").style.backdropFilter= "blur(15px)";
        
        
        
      } else {
        document.getElementById("navGlass").style.backgroundColor= "rgb(109, 55, 255 ,0.0)";
        document.getElementById("navGlass").style.backdropFilter= "blur(0px)";
        
      }
    }


    /*Mobil nav close  all click*/ 
    var  BtnCanvas = document.querySelectorAll(".btn-close-canvas");
    for(let i=0;BtnCanvas.length; i++){
        BtnCanvas[i].addEventListener("click",function(){
            document.querySelector('[data-bs-toggle="collapse"]').click();
        });
    
    }
    
    
    