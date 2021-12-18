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

function showBones(){
  var m1 = document.getElementById('BonesGame');
  var m2 = document.getElementById('SandmanGame');
  var m3 = document.getElementById('SpaceJellyGame');
  var m4 = document.getElementById('DarulToolbar');
  var m5 = document.getElementById('ArCoreGame');
  var m6 = document.getElementById('WebsitesHTML');

  m1.style.display = 'block'
  m2.style.display = 'none'
  m3.style.display = 'none'
  m4.style.display = 'none'
  m5.style.display = 'none'
  m6.style.display = 'none'

    var c1 = document.getElementById('click1');
    var c2 = document.getElementById('click2');
    var c3 = document.getElementById('click3');
    var c4 = document.getElementById('click4');
    var c5 = document.getElementById('click5');
    var c6 = document.getElementById('click6');

    c1.style.color = "yellow"
    c1.style.textDecoration = 'overline';
    c2.style.color = "white"
    c2.style.textDecoration = 'none';
    c3.style.color = "white"
    c3.style.textDecoration = 'none';
    c4.style.color = "white"
    c4.style.textDecoration = 'none';
    c5.style.color = "white"
    c5.style.textDecoration = 'none';
    c6.style.color = "white"
    c6.style.textDecoration = 'none';
}

function showSandman(){
  var m1 = document.getElementById('BonesGame');
  var m2 = document.getElementById('SandmanGame');
  var m3 = document.getElementById('SpaceJellyGame');
  var m4 = document.getElementById('DarulToolbar');
  var m5 = document.getElementById('ArCoreGame');
  var m6 = document.getElementById('WebsitesHTML');

  m1.style.display = 'none'
  m2.style.display = 'block'
  m3.style.display = 'none'
  m4.style.display = 'none'
  m5.style.display = 'none'
  m6.style.display = 'none'

  var c1 = document.getElementById('click1');
  var c2 = document.getElementById('click2');
  var c3 = document.getElementById('click3');
  var c4 = document.getElementById('click4');
  var c5 = document.getElementById('click5');
  var c6 = document.getElementById('click6');

  c1.style.color = "white"
  c1.style.textDecoration = 'none';
  c2.style.color = "yellow"
  c2.style.textDecoration = 'overline';
  c3.style.color = "white"
  c3.style.textDecoration = 'none';
  c4.style.color = "white"
  c4.style.textDecoration = 'none';
  c5.style.color = "white"
  c5.style.textDecoration = 'none';
  c6.style.color = "white"
  c6.style.textDecoration = 'none';
}

function showSpaceJelly(){
  var m1 = document.getElementById('BonesGame');
  var m2 = document.getElementById('SandmanGame');
  var m3 = document.getElementById('SpaceJellyGame');
  var m4 = document.getElementById('DarulToolbar');
  var m5 = document.getElementById('ArCoreGame');
  var m6 = document.getElementById('WebsitesHTML');

  m1.style.display = 'none'
  m2.style.display = 'none'
  m3.style.display = 'block'
  m4.style.display = 'none'
  m5.style.display = 'none'
  m6.style.display = 'none'

  var c1 = document.getElementById('click1');
  var c2 = document.getElementById('click2');
  var c3 = document.getElementById('click3');
  var c4 = document.getElementById('click4');
  var c5 = document.getElementById('click5');
  var c6 = document.getElementById('click6');

  c1.style.color = "white"
  c1.style.textDecoration = 'none';
  c2.style.color = "white"
  c2.style.textDecoration = 'none';
  c3.style.color = "yellow"
  c3.style.textDecoration = 'overline';
  c4.style.color = "white"
  c4.style.textDecoration = 'none';
  c5.style.color = "white"
  c5.style.textDecoration = 'none';
  c6.style.color = "white"
  c6.style.textDecoration = 'none';
}

function showDarulToolset(){
  var m1 = document.getElementById('BonesGame');
  var m2 = document.getElementById('SandmanGame');
  var m3 = document.getElementById('SpaceJellyGame');
  var m4 = document.getElementById('DarulToolbar');
  var m5 = document.getElementById('ArCoreGame');
  var m6 = document.getElementById('WebsitesHTML');

  m1.style.display = 'none'
  m2.style.display = 'none'
  m3.style.display = 'none'
  m4.style.display = 'block'
  m5.style.display = 'none'
  m6.style.display = 'none'

  var c1 = document.getElementById('click1');
  var c2 = document.getElementById('click2');
  var c3 = document.getElementById('click3');
  var c4 = document.getElementById('click4');
  var c5 = document.getElementById('click5');
  var c6 = document.getElementById('click6');

  c1.style.color = "white"
  c1.style.textDecoration = 'none';
  c2.style.color = "white"
  c2.style.textDecoration = 'none';
  c3.style.color = "white"
  c3.style.textDecoration = 'none';
  c4.style.color = "yellow"
  c4.style.textDecoration = 'overline';
  c5.style.color = "white"
  c5.style.textDecoration = 'none';
  c6.style.color = "white"
  c6.style.textDecoration = 'none';
}

function showArCoreGame(){
  var m1 = document.getElementById('BonesGame');
  var m2 = document.getElementById('SandmanGame');
  var m3 = document.getElementById('SpaceJellyGame');
  var m4 = document.getElementById('DarulToolbar');
  var m5 = document.getElementById('ArCoreGame');
  var m6 = document.getElementById('WebsitesHTML');

  m1.style.display = 'none'
  m2.style.display = 'none'
  m3.style.display = 'none'
  m4.style.display = 'none'
  m5.style.display = 'block'
  m6.style.display = 'none'

  var c1 = document.getElementById('click1');
  var c2 = document.getElementById('click2');
  var c3 = document.getElementById('click3');
  var c4 = document.getElementById('click4');
  var c5 = document.getElementById('click5');
  var c6 = document.getElementById('click6');

  c1.style.color = "white"
  c1.style.textDecoration = 'none';
  c2.style.color = "white"
  c2.style.textDecoration = 'none';
  c3.style.color = "white"
  c3.style.textDecoration = 'none';
  c4.style.color = "white"
  c4.style.textDecoration = 'none';
  c5.style.color = "yellow"
  c5.style.textDecoration = 'overline';
  c6.style.color = "white"
  c6.style.textDecoration = 'none';
}

function showWebsitesHTML(){
  var m1 = document.getElementById('BonesGame');
  var m2 = document.getElementById('SandmanGame');
  var m3 = document.getElementById('SpaceJellyGame');
  var m4 = document.getElementById('DarulToolbar');
  var m5 = document.getElementById('ArCoreGame');
  var m6 = document.getElementById('WebsitesHTML');

  m1.style.display = 'none'
  m2.style.display = 'none'
  m3.style.display = 'none'
  m4.style.display = 'none'
  m5.style.display = 'none'
  m6.style.display = 'block'

  var c1 = document.getElementById('click1');
  var c2 = document.getElementById('click2');
  var c3 = document.getElementById('click3');
  var c4 = document.getElementById('click4');
  var c5 = document.getElementById('click5');
  var c6 = document.getElementById('click6');

  c1.style.color = "white"
  c1.style.textDecoration = 'none';
  c2.style.color = "white"
  c2.style.textDecoration = 'none';
  c3.style.color = "white"
  c3.style.textDecoration = 'none';
  c4.style.color = "white"
  c4.style.textDecoration = 'none';
  c5.style.color = "white"
  c5.style.textDecoration = 'none';
  c6.style.color = "yellow"
  c6.style.textDecoration = 'overline';
}

function defaultFieldDecor(){
  var c1 = document.getElementById('click1');
  c1.style.color = "yellow"
  c1.style.textDecoration = 'overline';
}
