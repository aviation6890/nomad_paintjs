const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
console.log(ctx);

canvas.width = 700;
canvas.height = 700;


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

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting) //mousedown: 클릭했을때 발생하는 event.
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

console.log(Array.from(colors));

Array.from(colors).forEach(color => color.addEventListener("click", handelColorClick))