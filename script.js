const lights = document.getElementsByClassName('light')


document.querySelector('body').addEventListener('keydown', function(event) {
    let position = event.keyCode - 65
    
    let colorLight = "glow-"
    
    const colors = ["yellow", "blue", "pink", "green", "purple", "yellow", "red", "green", "green", "pink", "blue", "purple", "yellow", "red", "pink", "blue", "red", "purple", "red", "yellow", "green", "pink", "blue", "green", "purple", "yellow"]

    on(position, colorLight+colors[position])

});

function on(position, color){
    lights[position].style.animation = ""
    setTimeout(()=> lights[position].style.animation = color + " 1.5s linear", 1)
    off()
}

function off(){
    for (var i = 0; i < 26; i++) {
        lights[i].style.animation = "none"
        lights[i].style.background = "#563260";
    }
}






