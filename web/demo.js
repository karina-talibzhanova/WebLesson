let isClicked = false;
function SayHello() {
    window.alert("Hello!");
    if (isClicked) {
        document.getElementById("clever-id").innerHTML = "";
        isClicked = false;
    } else {
        document.getElementById("clever-id").innerHTML = "AAAAAA";
        isClicked = true;
    }
}

function ChangeStyle(obj, oldStyle, newStyle) {
    obj.classList.remove(oldStyle);
    obj.classList.add(newStyle);
}

function AddLine(obj) {
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("la la la");
    paragraph.appendChild(textNode);
    obj.appendChild(paragraph);
}

function DeleteLastLine(obj) {
    let elements = obj.getElementsByTagName("p");
    if (elements.length > 0) {
        obj.removeChild(elements[elements.length-1]);
    }
}