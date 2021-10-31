var canvas = new fabric.Canvas('MyCanvas');
ball_x=0;
ball_y=0;
hole_x=300;
hole_y=500;
block_image_width = 5;
block_image_height = 5;
ball_image_object="";
hole_image_object="";

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img) {
    holeobj = Img;
    holeobj.scaleToWidth(90);
    holeobj.scaleToHeight(90);
    holeobj.set({
    top:hole_y,
    left:hole_x
    });
    canvas.add(holeobj);
    });
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img)
	{
   ball_image_object = Img;

   ball_image_object.scaleToWidth(block_image_width);
   ball_image_object.scaleToHeight(block_image_height);
   ball_image_object.set({
   top:ball_y,
   left:ball_x
   });
   canvas.add(ball_image_object);

   });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_x == hole_x) && (ball_y == hole_y))
	{
		document.getElementById("hd3").innerHTML="Gameover!"
		document.getElementById("hd3").style
		canvas.remove(ball_image_object);
	}

	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y>=0){
			ball_y=ball_y-block_image_height;
			canvas.remove(ball_image_object);
			new_image();
		}
	}

	function down()
	{
		if (ball_y<=0){
			ball_y=ball_y+block_image_height;
			canvas.remove(ball_image_object);
			new_image();
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x=ball_x-block_image_height;
			canvas.remove(ball_image_object);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x=ball_x+block_image_height;
			canvas.remove(ball_image_object);
			new_image();
		}
	}
	
}
}