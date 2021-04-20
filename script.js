const lights = document.getElementsByClassName('light')

const colors = ["yellow", "blue", "pink", "green", "purple", "yellow", "red", "green", "green", "pink", "blue", "purple", "yellow", "red", "pink", "blue", "red", "purple", "red", "yellow", "green", "pink", "blue", "green", "purple", "yellow"]

const letters = ["A", "B", "C", "D", "E","F", "G","H", "I","J", "K","L", "M","N", "O","P", "Q","R", "S","T", "U","V", "W","X", "Y","Z"]

document.querySelector('body').addEventListener('keydown', function(event) {
    let position = event.keyCode - 65
    let colorLight = "glow-"
    on(position, colorLight+colors[position])

});

function on(position, color){
    off()
    setTimeout(()=> lights[position].style.animation = color + " 1.5s linear")

}

function off(){
    for (var i = 0; i < 26; i++) {
        lights[i].style.animation = "none"
        lights[i].style.background = "#563260";
    }
}

var aux = 0;
for(var i = 1; i <= 3; i++){

    for(var j = aux -1 ; j < 8+ aux; j++){
        if(j >= 0){
            var div = document.createElement("div")
            div.setAttribute("class", "letter")
        
            var light = document.createElement("div")
            light.setAttribute("class", "light "+colors[j])
        
            var letter = document.createElement("p")
            letter.innerHTML= letters[j]
        
            document.getElementsByClassName("line-"+(i).toString())[0].appendChild(div)
            div.appendChild(light)
            div.appendChild(letter)
        }
    }
    aux += 9
}


for(i = 0; i < 10; i++){
    let line = document.createElement("div")
    line.setAttribute("class", "line")
    document.getElementsByClassName("wood-detail")[0].appendChild(line)
}
