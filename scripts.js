function disableElements1(){
  var nodes = document.getElementById("subject2");
  if(window.getComputedStyle(nodes).display === "inline"){
  nodes.style.display = 'none';
  }
  else{
    nodes.style.display = 'inline';
  }

  var nodes2 = document.getElementById("subject1_1");
  if(window.getComputedStyle(nodes2).display === "inline"){
  nodes2.style.display = 'none';
  }
  else{
    nodes2.style.display = 'inline';
  }
}
