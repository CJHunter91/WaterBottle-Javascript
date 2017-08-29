var Athlete = function() {
  this.hydration = 100;
  this.distanceCovered = 0;
  this.run = function() {
    if(this.hydration >= 10){
      this.distanceCovered += 10;
      this.hydration -= 10;
    }
  }
  this.drink = function(bottle, amount) {
    this.hydration += bottle.drink(amount);
  }
  

}


module.exports = Athlete;