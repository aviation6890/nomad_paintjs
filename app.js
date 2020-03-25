const convas = document.getElementById("jsCanvas");
const ctx = convas.getContext("2d");

ctx.strokeStyle ="#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else {
        ctx.lineTo(x,y);
    }
}

function onMouseDown(evnet){
    painting = true;
}

if(convas){
    convas.addEventListener("mousemove", onMouseMove);
    convas.addEventListener("mousedown", startPainting) //mousedown: 클릭했을때 발생하는 event.
    convas.addEventListener("mouseup", stopPainting);
    convas.addEventListener("mouseleave", stopPainting);
}