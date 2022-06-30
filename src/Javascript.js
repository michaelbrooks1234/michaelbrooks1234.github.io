let body = document.getElementsByName("body");
function scrolling(){
    if(window.scrollY > window.innerHeight/4){
        let landingcontent = document.getElementById("landingcontent")
        landingcontent.style = "opacity: 0;"
    }else{
        let landingcontent = document.getElementById("landingcontent")
        landingcontent.style += "opacity: 1;"
    }
    return null;
}

function openform(){
    
}