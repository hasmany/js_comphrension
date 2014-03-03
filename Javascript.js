
var emergency = function (); {
  alert("EMERGENCY!");
};

emergency();

var opposite = function(boolean) {
  console.log(!boolean);
};

opposite(true);


var waterStatus = function (temp) {
  if (temp >=212) {
    console.log("Boiling");
} else if (temp <= 32) {
    console.log("Frozen");
} else {
    console.log("Normal");
}
};

waterStatus(21);
waterStatus(215);
waterStatus(77);

var bicycle = {};

bicycle.tireSize
bicycle.height
bicycle.color

var dog = {name: "Lucky"};

console.log(dog["name"]);
