function setupTypewriter(t) {

    var HTML = t.innerHTML;
    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
      tempTypeSpeed = 0;

    var type = function() {

        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 30;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 30;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1) {
            setTimeout(type, tempTypeSpeed);
        }

    };

    return {
        type: type
    };

}

function loadContent(){

  //var myStyle = document.getElementById("typewriter").offsetTop;

  var typer = document.getElementById('typewriter');
  typewriter = setupTypewriter(typewriter);
  typewriter.type();

}

function changeMenuColor_blue(){
    var menu = document.getElementById('navbar');
    menu.style.backgroundColor = "blue";
}

function changeMenuColor_orange(){
    var menu = document.getElementById('navbar');
    menu.style.backgroundColor = "orange";
}
function changeMenuColor_purple(){
    var menu = document.getElementById('navbar');
    menu.style.backgroundColor = "purple";
}

function changeMenuColor_red(){
    var menu = document.getElementById('navbar');
    menu.style.backgroundColor = "red";
}


function changeMenuColor_gray(){
    var menu = document.getElementById('navbar');
    menu.style.backgroundColor = "gray";
}
