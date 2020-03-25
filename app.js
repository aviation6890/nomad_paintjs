const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

let painting = false;
let filling = false;

canvas.width = 700;
canvas.height = 700;

ctx.lineWidth = 2.5;

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
        //console.log("creating path in",x,y);
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else {
        //console.log("creating line in",x,y);
        ctx.lineTo(x,y);
        ctx.stroke();

    }
}

function handelColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle =color;
}

function handelRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event){
    console.log(event);
    if(filling == true){
        filling = false;
        mode.innerText = "Fill";
    }else {
        filling = true;
        mode.innerText = "Faint";
    }
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting) //mousedown: 클릭했을때 발생하는 event.
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if(colors){
    Array.from(colors).forEach(color => 
        color.addEventListener("click", handelColorClick)
    );
}

if(range){
    range.addEventListener("input", handelRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);

}