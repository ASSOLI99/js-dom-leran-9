let contain=document.querySelector(".hero");
let text=document.querySelector("h1");
let walk=120;
function shadow(e){

let {offsetWidth:width, offsetHeight:height}=contain;
let {offsetX: x, offsetY: y} = e;
if(this !== e.target){
    x=x +e.target.offsetLeft;
    y=y +e.target.offsetTop;
}

let walkX=(x /width * walk)-(walk/2);
let walkY=(y /height * walk)-(walk/2);
text.style.textShadow=`
                       ${walkX}px ${walkY}px 5px red,
                       ${walkX * -1}px ${walkY *-1}px 5px #a251ff,
                       ${walkX}px ${walkY * -1}px 5px aqua`
}
contain.addEventListener("mousemove",shadow);
let meme=[""];
document.addEventListener("keyup",(e) =>{
    if(e.key==="Backspace"){
        meme.length=meme.length-1;
        return text.innerHTML=`${meme.join("")}`;
        
    }
    meme.push(`${e.key}`)
    text.innerHTML=`${meme.join("")}`
});