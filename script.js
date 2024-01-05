
//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    //documnet ma button vako tag ma click garda handleClick function call hunxa
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })    
};


//Detecting Keyboard Press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}








function makeSound(key) {
    switch (key) {
        case "a":
            var audio = new Audio('sounds/tom-1.mp3'); //Audio is constructor
            audio.play();
            break;
    
        case "s":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "d":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "f":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
    
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
    
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    
    
        default:
            break;
    }
    
    
}