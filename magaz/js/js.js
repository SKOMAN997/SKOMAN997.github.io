var scroll;
var timer;
document.getElementById('top').onclick=function (){
    scroll=window.pageYOffset;
    sas();
}

function sas(){
        
        if(scroll>0){
            scroll=scroll-100;
            window.scrollTo(0,scroll);
            timer=setTimeout(sas,10);
        }
    
        else{
            clearInterval(timer);
        }
        
    }