function comenzaranimacion(){
	var canvas=document.getElementById("canvas");
	var lienzo=canvas.getContext("2d");
	var imagen=new Image();
	$(canvas).css("visibility","visible");
	imagen.scr="Imagenes/Baldosa.png";
	lienzo.drawImage(imagen,10,10);
	lienzo.stroke();
	
	
}