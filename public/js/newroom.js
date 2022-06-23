
//ids1 and mals are used to create unique room id everytime a user enters 

let ids1 = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "abc",
    "def",
    "ghi",
    "klm",
    "nop",
    "qrs",
    "taa",
    "tm",
    "ti",
    "eat",
    "loop",
    "gu",
    "ch",
    "yog",
    "di",
    "res",
    "csw",
    "daa",
    "zy",
    "ad",
    "oud",
    "md",
    "ao",
    "av",
    "aa",
  ];
  
  let mals = [
    "g_90",
    "b_io",
    "wre",
    "ap",
    "pop",
    "mo_23",  
    "ow",
    "mq",
    "oj",
    "bbit",
    "ox",
    "w",
    "2_eaver",
    "goo",
    "us_2",
    "la_1",
    "maz",
    "za",
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
  
  let ad = ids1[Math.floor(Math.random() * ids1.length)];
  let n = mals[Math.floor(Math.random() * mals.length)];
  let num = getRandomNumber(5);
  n = n.charAt(0).toUpperCase() + n.substring(1);
  ad = ad.charAt(0).toUpperCase() + ad.substring(1);
  document.getElementById("roomName").value = "";
  
  // Typing Effect for the unique id
  
  let i = 0;
  let txt = num + ad + n;
  let speed = 100;
  
  typeWriter();
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("roomName").value += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  