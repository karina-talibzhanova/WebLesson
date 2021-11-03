let hovered = false;

function HoverRainbow() {
    let id = null;
    let elem = document.getElementById("rainbow");
    if (hovered) {
        let letterSpace = 20;
        id = setInterval(frame, 20);
        function frame() {
            if (letterSpace === 0) {
                clearInterval(id);
            } else {
                letterSpace--;
                elem.style.letterSpacing = letterSpace + "px";
            }
        }
        hovered = false;
    } else {
        let letterSpace = 0;
        id = setInterval(frame, 20);
        function frame() {
            if (letterSpace === 20) {
                clearInterval(id);
            } else {
                letterSpace++;
                elem.style.letterSpacing = letterSpace + "px";
            }
        }
        hovered = true;
    }
}