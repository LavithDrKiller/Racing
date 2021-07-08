canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");

rover_x=10;
rover_y=10;
rover_width=100
rover_height=90

background_image="racing track.jpg";
rover_image="car-1.jpg";

car_x=10;
car_y=110;
car_width=100
car_height=90
car_image="car-2.jpg";


function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground;
    background_imageTag.src=background_image;


    background_roverTag=new Image();
    background_roverTag.onload=uploadRover;
    background_roverTag.src=rover_image;

    car_image_tag=new Image();
    car_image_tag.onload=uploadcar;
    car_image_tag.src=car_image;
}

function uploadBackground(){
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(background_roverTag,rover_x,rover_y,rover_width,rover_height);
    }

    function uploadcar(){
        ctx.drawImage(car_image_tag,car_x,car_y,car_width,car_height)
    }