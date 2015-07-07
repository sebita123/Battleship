function comenzaranimacion(){
	
	var canvas=document.getElementById("canvas");
	var lienzo=canvas.getContext("2d");
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	alert(canvas.height);
	$(canvas).css("visibility","visible");
	var cantidad=0;
	var img=new Image();
	img.src="Imagenes/stock_002_by_mrs_shironeko-d57fh6x.png";
	img.width=50;
	img.height=50;
	var posx=0;
	var posy=0;
	var intervalo=setInterval(function(){
		var rgba="rgba(0,0,0,"+(Math.random() *0.100)+")";
		lienzo.clearRect(0,0,canvas.width,canvas.height);
		lienzo.drawImage(img,posx,posy,50,50);
		lienzo.drawImage(img,posx+290,posy+50,50,50);
		lienzo.drawImage(img,posx+390,posy+100,50,50);
		lienzo.drawImage(img,posx+600,posy+150,50,50);
		lienzo.drawImage(img,posx+700,posy+200,50,50);
		lienzo.drawImage(img,posx+800,posy+250,50,50);
		lienzo.drawImage(img,posx+900,posy+300,50,50);
		lienzo.drawImage(img,posx+1000,posy+350,50,50);
		posx+=2;
		posy+=5;
		if(posy>670){
			posy=-2
			posx=-2;
			
		}
	},1000/50);
	
}

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