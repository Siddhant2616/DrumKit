/*document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked!");
}*/
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    //$=document.querySelector= document.querySelectorAll
document.querySelectorAll(".drum")[i].addEventListener("click",function(){ 
    var buttonInnerhtml= this.innerHTML;
    makesound(buttonInnerhtml);
    buttonAnimation(buttonInnerhtml);
}
);}

document.addEventListener("keydown",function(event){
       makesound(event.key);
       buttonAnimation(event.key);
})

function makesound(key){
    switch(key){
        case "w":
         var audio= new Audio("sound/tom-1.mp3");
         audio.play();
        break;
        case "a":
         var audio= new Audio("sound/tom-2.mp3");
         audio.play();
        break;
        case "s":
         var audio= new Audio("sound/tom-3.mp3");
         audio.play();
        break;
        case "d":
         var audio= new Audio("sound/tom-4.mp3");
         audio.play();
         break;
         case "j":
          var audio= new Audio("sound/kick-bass.mp3");
          audio.play();
         break;
         case "k":
          var audio= new Audio("sound/crash.mp3");
          audio.play();
         break;
         case "l":
          var audio= new Audio("sound/snare.mp3");
          audio.play();
         break;
         default:console.log(buttonInnerhtml);
  }
}

function buttonAnimation(currentkey){
    var activebutton= document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    $("h1").css("color","red");
    setTimeout(function(){activebutton.classList.remove("pressed");},100);
}
//minified version is used by browsers for saving bytes.
//for(var i=0; i<document.querySelectorAll(".drum").length; i++){
   // document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 /*(document.querySelector)=jQuery=*/ //$("h1").css("color","red");//