var dog = new Audio();
dog.src = "media/dog.mp3";

var kitten = new Audio();
kitten.src = "media/kitten.mp3";

var cow = new Audio();
cow.src = "media/cow.mp3";

var bee = new Audio();
bee.src = "media/bee.mp3";

var pig = new Audio();
pig.src = "media/pig.mp3";

var woodpecker = new Audio();
woodpecker.src = "media/woodpecker.mp3";

document.body.addEventListener('keypress', (event) => {
    if(event.key == 'd'){
      dog.play();
    }else if(event.key == 'c'){
      cow.play();
    }else if(event.key == 'k'){
      kitten.play();
    }else if(event.key == 'b'){
        bee.play();
    }else if(event.key == 'w'){
        woodpecker.play();
    }else if(event.key == 'p'){
        pig.play();
    }
  })