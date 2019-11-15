/*function docolor(){
	var dd1=document.getElementById("d1");
	var colorinput=document.getElementById("clr");
	var color=colorinput.value;
	dd1.style.backgroundColor=color;

}*/
var image;
function upload(){
	
	var fileinput=document.getElementById("finput");
	var imgcanvas=document.getElementById("can");
	image=new SimpleImage(fileinput);
	image.drawTo(imgcanvas);
	
}
function makeGray(){
	for(var pixel of image.values())
		{
			var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);

    pixel.setBlue(avg);
    pixel.setGreen(avg);}
    var imgcanvas=document.getElementById("can");
    image.drawTo(imgcanvas);
}
function makeRed(){
	for(var pixel of image.values())
	{

			var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    		if(avg<128)
    		{
    			pixel.setRed(2*avg);
    			pixel.setGreen(0);
    			pixel.setBlue(0);
    		}
    		else
    		{
    			pixel.setRed(255);
    			pixel.setGreen(2*avg-255);
    			pixel.setBlue(2*avg-255);
    		}

	}
	var imgcanvas=document.getElementById("can");
	image.drawTo(imgcanvas);
}