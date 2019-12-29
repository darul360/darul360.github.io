let rotateAngle = 180;

function MouseOver(image) {
  image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
  //image.setAttribute("style", "transform: scale(1.2)");
}

function MouseOut(image) {
  image.setAttribute("style", "transform: rotate(" + 0 + "deg)");

}
