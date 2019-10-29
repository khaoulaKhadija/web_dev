function vect(x,y){
	this.x=x;
	this.y=y;

};
vect.prototype.mod=function(){
return(Math.sqrt(this.x*this.x)+(this.y*this.y));
    

}
vect.prototype.egale=function(v){
	return(this.x==v.x && this.y==v.y);
}
let v1=new vect(2,4);
let v2=new vect(3,4);
console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));
