const button=document.getElementById("rain");
const body=document.querySelector("body");
const color=["voilet","red","blue","orange","green","indigo","yellow"];
document.addEventListener('click',function(){
 this.body.style.background=color[Math.floor(Math.random()*color.length)];
});