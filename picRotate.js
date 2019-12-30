let rotateAngle = 180;

function MouseOver(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
}

function MouseOut(image) {
  image.setAttribute("style", "transform: rotate(" + 0 + "deg)");
}


function titleOver(text) {
  text.setAttribute("style", "font-size: 35px;")
}

function titleOut(text) {
  text.setAttribute("style", "font-size: 30px;")
}

function oneOver(body,text){
  body.setAttribute("style", "background-color: rgb(246, 218, 240);")
  text.setAttribute("style", "font-size: 35px;")
}

function twoOver(body,text){
  body.setAttribute("style", "background-color: rgb(241, 218, 213);")
  text.setAttribute("style", "font-size: 35px;")
}

function threeOver(body,text){
  body.setAttribute("style", "background-color: rgb(228, 241, 227);")
  text.setAttribute("style", "font-size: 35px;")
}

function fourOver(body,text){
  body.setAttribute("style", "background-color: rgb(250, 244, 226);")
  text.setAttribute("style", "font-size: 35px;")
}

function oneOut(body,text){
  body.setAttribute("style", "background-color: rgb(228, 234, 241);")
  text.setAttribute("style", "font-size: 30px;")
}
