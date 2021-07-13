
//these are the some adjectives and noun 

let ids1 = [
    "sm",
    "b",
    "le",
    "sme",
    "new",
    "hy",
    "shy",
    "ol",
    "cl",
    "ni",
    "bad",
    "cool",
    "hot",
    "cold",
    "rm",
    "gry",
    "low",
    "fast",
    "red",
    "white",
    "black",
    "blue",
    "green",
    "basic",
    "strong",
    "cute",
    "poor",
    "nice",
    "huge",
    "rare",
    "lucky",
    "weak",
    "tall",
    "t",
    "tiny",
    "great",
    "long",
    "gule",
    "ch",
    "yog",
    "dirt",
    "resh",
    "byo",
    "dark",
    "zy",
    "ad",
    "loud",
    "brave",
    "calm",
    "silly",
    "s",
  ];
  
  let mals = [
    "dog",
    "bat",
    "wrench",
    "apple",
    "pear",
    "ghost",
    "cat",
    "wolf",
    "squid",
    "goat",
    "snail",
    "hat",
    "sock",
    "plum",
    "bear",
    "snake",
    "turtle",
    "horse",
    "spoon",
    "fork",
    "spider",
    "tree",
    "chair",
    "table",
    "couch",
    "towel",
    "panda",
    "bread",
    "grape",
    "cake",
    "brick",
    "rat",
    "mouse",
    "bird",
    "oven",
    "phone",
    "photo",
    "frog",
    "bear",
    "camel",
    "sheep",
    "shark",
    "tiger",
    "zebra",
    "duck",
    "eagle",
    "fish",
    "kitten",
    "lobster",
    "monkey",
    "owl",
    "puppy",
    "pig",
    "rabbit",
    "fox",
    "whale",
    "beaver",
    "gorilla",
    "lizard",
    "parrot",
    "slth",
    "swa",
  ];
  
  function getRandomNumber(length) {
    let result = "";
    let characters = "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  let adjective = ids1[Math.floor(Math.random() * ids1.length)];
  let noun = mals[Math.floor(Math.random() * mals.length)];
  let num = getRandomNumber(5);
  noun = noun.charAt(0).toUpperCase() + noun.substring(1);
  adjective = adjective.charAt(0).toUpperCase() + adjective.substring(1);
  document.getElementById("roomName").value = "";
  
  // Typing Effect for the unique id
  
  let i = 0;
  let txt = num + adjective + noun;
  let speed = 100;
  
  typeWriter();
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("roomName").value += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  