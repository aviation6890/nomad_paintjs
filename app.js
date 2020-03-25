const convas = document.getElementById("jsCanvas");
let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(evnet){

    painting = true;
    console.log(event);
}

function onMouseUp(event){
    paintig = true;
}

function onMouseLeave(event){
    stopPainting
}

if(convas){
    convas.addEventListener("mousemove", onMouseMove);
    convas.addEventListener("mousedown", onMouseDown) //mousedown: 클릭했을때 발생하는 event.
    convas.addEventListener("mouseup", onMouseUp);
    convas.addEventListener("mouseleave", stopPainting);
}