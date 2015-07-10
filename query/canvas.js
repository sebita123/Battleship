function comenzaranimacion(){
	
	var canvas=document.getElementById("canvas");
	var lienzo=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	
	$(canvas).css("visibility","visible");
	$(canvas).css("background-color","rgba(0,0,0,0.3)");
	var cantidad=0;
	var img=new Image();
	img.src="Imagenes/stock_002_by_mrs_shironeko-d57fh6x.png";
	img.width=50;
	img.height=50;
	var posx=0;
	var posy=0;
	var array="**********************";
	array.split("");
	var intervalo=setInterval(function(){
	lienzo.clearRect(0,0,canvas.width,canvas.height);	
	lienzo.drawImage(img,posx,posy,50,50);
		lienzo.drawImage(img,posx+290,posy+50,50,50);
		lienzo.drawImage(img,posx+390,posy+100,50,50);
		lienzo.drawImage(img,posx+600,posy+150,50,50);
		lienzo.drawImage(img,posx+700,posy+200,50,50);
		lienzo.drawImage(img,posx+800,posy+250,50,50);
		lienzo.drawImage(img,posx+900,posy+300,50,50);
		lienzo.drawImage(img,posx+1000,posy+350,50,50);
		posx+=5;
		posy+=5;
		if(posx>canvas.height){
			posx=10;
			posy=10;
		}
	},1000/33);
	
return intervalo;}


function animartexto(){
	var canvas=document.getElementById("animartexto");
	canvas.width=window.innerWidth;
	canvas.height=200;
	var ctx=canvas.getContext("2d");
	var pos_x=0;
	setInterval(function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.font="80pt Verdana";
		ctx.fillStyle=getRandomColor();
		ctx.fillText("Turno de Barco:",pos_x,100);
		
		pos_x+=8;
		function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
	},1000/33);
}

function turnoh(){
	var canvas=document.getElementById("animartexto");
	$(canvas).css("visibility","visible");
	var contenedor=document.getElementsByClassName("container-fluid");
	$(canvas).css("margin","0 auto");
	var ctx=canvas.getContext("2d");
	var inicio=0;
	var inicioy=0
	var tiempo=setInterval(function(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.fillStyle="rgba(0,0,0,0.2)";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		ctx.font="40px Arial";
		ctx.fillStyle="red";
		ctx.fillText("Turno Teniente hopper",inicio,inicioy);
		inicio=inicio+canvas.width/60;
		inicioy=inicioy+canvas.height/60;
		if(inicio>canvas.width){
			clearInterval(tiempo);
			$(canvas).css("visibility","hidden");
		}
	},1000/36);
	
	
}
function perder(){
	
		var canvas=document.getElementById("canvas");
	var lienzo=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	
	$(canvas).css("visibility","visible");
	$(canvas).css("background-color","rgba(0,0,0,0.3)");
	var cantidad=0;
	var img=new Image();
	img.src="Imagenes/CHANGRE.png";
	img.width=50;
	img.height=50;
	var posx=50;
	var posy=50;
	var tiempo=setInterval(function(){
		lienzo.clearRect(0,0,canvas.width,canvas.height);
		lienzo.drawImage(img,100,400,posx,posy);
		lienzo.drawImage(img,600,400,posx+20,posy+20);
		posy+=10;
		posx+=10;
		if(posx>300){
			clearInterval(tiempo);
			comenzaranimacion();
			
		}
	},1000/33);

}