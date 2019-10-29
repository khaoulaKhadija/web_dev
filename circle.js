const c=document.querySelector(".circle");
	console.log(c);
	console.log(c.style.top);
	console.log(c.style.left);
 var width = window.innerWidth;
 var height = window.innerHeight;
function getCord(e){
	var x=(width-e.clientX-25)+"px";
		var y=(height-e.clientY-25)+"px";
c.style.top=y;
c.style.left=x;
	console.log(x,y);
	return[x,y];
}
function color(){
	c.style.backgroundColor="green";

}
var b=document.querySelector("body");
b.addEventListener("mousemove",getCord,false);
c.addEventListener("mouseenter",color,false);
