let drum=document.querySelectorAll(".drum");
document.addEventListener("keydown",(e)=>{
    switch(e.key){
        case 'w':let w=new Audio("tom-1.mp3");w.play();break;
        case 'a':let a=new Audio("tom-2.mp3");a.play();break;
        case 's':let s=new Audio("tom-3.mp3");s.play();break;
        case 'd':let d=new Audio("tom-4.mp3");d.play();break;
        case 'j':let j=new Audio("snare.mp3");j.play();break;
        case 'k':let k=new Audio("crash.mp3");k.play();break;
        case 'l':let l=new Audio("kick-bass.mp3");l.play();break;
    }
});

for(let i=0;i<drum.length;i++){
    drum[i].addEventListener("click",onClicked);
    function onClicked(){
        let element=drum[i].innerText;
        switch(element){
            case 'w':let w=new Audio("tom-1.mp3");w.play();break;
            case 'a':let a=new Audio("tom-2.mp3");a.play();break;
            case 's':let s=new Audio("tom-3.mp3");s.play();break;
            case 'd':let d=new Audio("tom-4.mp3");d.play();break;
            case 'j':let j=new Audio("snare.mp3");j.play();break;
            case 'k':let k=new Audio("crash.mp3");k.play();break;
            case 'l':let l=new Audio("kick-bass.mp3");l.play();break;
        }
    }   
        drum[i].classList.add("pressed");
        setTimeout(function(){drum[i].classList.remove("pressed")},100);
}