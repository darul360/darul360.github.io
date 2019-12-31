let rotateAngle = 180;

function MouseOver(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
}

function MouseOut(image) {
  image.setAttribute("style", "transform: rotate(" + 0 + "deg)");
}


function titleOver(text) {
  text.setAttribute("style", "font-size: 1.4vw;")
}

function titleOut(text) {
  text.setAttribute("style", "font-size: 1.2vw;")
}

function oneOver(body,text){
  body.setAttribute("style", "background-color: rgb(246, 218, 240);")
  /*text.setAttribute("style", "font-size: 1.4vw;")*/
}

function twoOver(body,text){
  body.setAttribute("style", "background-color: rgb(241, 218, 213);")
  /*text.setAttribute("style", "font-size: 1.4vw;")*/
}

function threeOver(body,text){
  body.setAttribute("style", "background-color: rgb(228, 241, 227);")
  /*text.setAttribute("style", "font-size: 1.4vw;")*/
}

function fourOver(body,text){
  body.setAttribute("style", "background-color: rgb(250, 244, 226);")
  /*text.setAttribute("style", "font-size: 1.4vw;")*/
}

function oneOut(body,text){
  body.setAttribute("style", "background-color: rgb(228, 234, 241);")
  /*text.setAttribute("style", "font-size: 1.2vw;")*/
}

/*
function typeWriter(text){
    var i=0;
    var textSrc = text.textContent;
    text.style.color = 'white';
    text.charAt(0).style.color = 'black';
    var array = text.innerHTML.split();
    text[0].style.color = 'black';
    function func(){
        if(i < text.textContent.length)
        {
            text.charAt(i).style.color = 'black';
            i++;
            setTimeout(func,50);
        }
        
    }
    func();

}
*/