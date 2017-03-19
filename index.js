const app = "I don't do much."

var bumpCounter = () => {
  let counter = 0;

  var addBump = () => {
    counter++;
  }

  var getBumps = () => {
    return counter;
  }

  return {addBump, getBumps};
}


var createAnimal = (animalType) => {
  return (deadlyDevice) => {
    return {animalType, deadlyDevice};
  }
}

var sharkCreator = createAnimal('Shark');
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam');
var sharkWithFrickinCannon = sharkCreator('Cannon');
