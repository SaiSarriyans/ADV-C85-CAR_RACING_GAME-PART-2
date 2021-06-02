canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car_1_width =  120;
car_1_height =  70;
car_1_image = "car1.png";
car_1_x = 10;
car_1_y = 10;

car_2_width =  120;
car_2_height =  70;
car_2_image = "car2.png";
car_2_x = 10;
car_2_y = 100;

background_image = "racing.jpg";


function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

car_1_imgTag = new Image();
car_1_imgTag.onload = uploadcar_1;
car_1_imgTag.src = car_1_image;

car_2_imgTag = new Image();
car_2_imgTag.onload = uploadcar_2;
car_2_imgTag.src = car_2_image;


}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}


function uploadcar_1() {
    ctx.drawImage(car_1_imgTag, car_1_x, car_1_y, car_1_width, car_1_height);
}

function uploadcar_2() {
    ctx.drawImage(car_2_imgTag, car_2_x, car_2_y, car_2_width, car_2_height);
}

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);

background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') 
    {
        car_1_up();
        console.log("up")
    }
    if(keyPressed == '40') 
    {
        car_1_down();
        console.log("down");
    }
    if(keyPressed == '37') 
    {
        car_1_left();
        console.log("left");
    }
    if(keyPressed == '39') 
    {
        car_1_right();
        console.log("right");
    }
    if(keyPressed == '87')
    {
        car_2_up();
        console.log("key w");
    }
    if(keyPressed == '83')
    {
        car_2_down();
        console.log("key s");
    }
    if(keyPressed == '65')
    {
        car_2_left();
        console.log("key a");
    }
    if(keyPressed == '68')
    {
        car_2_right();
        console.log("key d");
    }
}
