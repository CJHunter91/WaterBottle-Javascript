var WaterBottle = function() {
  this.volume = 0;
  this.fill = function() {
    this.volume = 100;
  }
  this.drink = function(amount) {
    if(this.volume - amount < 0){
      var temp = this.volume;
      this.volume = 0;
      return temp;
    }
    else if(this.volume - amount > 0){
      this.volume -= amount;
      return amount;
    }
  }
  this.empty = function() {
    this.volume = 0;
  }
}



//to export something, we need to tell it

module.exports = WaterBottle;