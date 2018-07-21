var t;
var currentIndex = 1;
t = setInterval("next()", 3000);
function next() {    
    clearInterval(t);    
    if(currentIndex < 3) {        
        currentIndex++;       
        document.getElementById("slide").src = "../Images/fheader" + currentIndex + ".png";        
    }    
    else {       
        currentIndex = 1;        
        document.getElementById("slide").src = "../Images/fheader" +currentIndex + ".png";
    }
    t = setInterval("next()", 3000);
    
}

function back() {
    clearInterval(t);
    if(currentIndex > 1) {
        currentIndex--;
        document.getElementById("slide").src = "../Images/fheader" +currentIndex + ".png";
    }
    else {
        currentIndex = 3;
        document.getElementById("slide").src = "../Images/fheader" +currentIndex + ".png";
    }     
    t = setInterval("next()", 3000);        
}