const lights = document.getElementsByClassName('light')
const len = lights.length

document.querySelector('body').addEventListener('keydown', function(event) {
    if(event.keyCode == 65){
        on(0, "glow-yellow")
    }
    else if(event.keyCode == 66){
        on(1, "glow-blue")
    }
    else if(event.keyCode == 67){
        on(2, "glow-pink")
    }
    else if(event.keyCode == 68){
        on(3, "glow-green")
    }
    else if(event.keyCode == 69){
        on(4, "glow-purple")
    }
    else if(event.keyCode == 70){
        on(5, "glow-yellow")
    }
    else if(event.keyCode == 71){
        on(6, "glow-red")
    }
    else if(event.keyCode == 72){
        on(7, "glow-green")
    }
    else if(event.keyCode == 73){
        on(8, "glow-green")
    }
    else if(event.keyCode == 74){
        on(9, "glow-pink")
    }
    else if(event.keyCode == 75){
        on(10, "glow-blue")
    }
    else if(event.keyCode == 76){
        on(11, "glow-purple")
    }
    else if(event.keyCode == 77){
        on(12, "glow-yellow")
    }
    else if(event.keyCode == 78){
        on(13, "glow-red")
    }
    else if(event.keyCode == 79){
        on(14, "glow-pink")
    }
    else if(event.keyCode == 80){
        on(15, "glow-blue")
    }
    else if(event.keyCode == 81){
        on(16, "glow-red")
    }
    else if(event.keyCode == 82){
        on(17, "glow-purple")
    }
    else if(event.keyCode == 83){
        on(18, "glow-red")
    }
    else if(event.keyCode == 84){
        on(19, "glow-yellow")
    }
    else if(event.keyCode == 85){
        on(20, "glow-green")
    }
    else if(event.keyCode == 86){
        on(21, "glow-pink")
    }
    else if(event.keyCode == 87){
        on(22, "glow-blue")
    }
    else if(event.keyCode == 88){
        on(23, "glow-green")
    }
    else if(event.keyCode == 89){
        on(24, "glow-purple")
    }
    else if(event.keyCode == 90){
        on(25, "glow-yellow")
    }
});

function on(position, color){
    lights[position].style.animation = ""
    setTimeout(()=> lights[position].style.animation = color + " 1.5s linear", 1)
    off()
}

function off(){
    for (var i = 0; i < len; i++) {
        lights[i].style.animation = "none"
        lights[i].style.background = "#563260";
    }
}






