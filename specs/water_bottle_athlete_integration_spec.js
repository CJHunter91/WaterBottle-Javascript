var assert = require("assert");
var Athlete = require( "../athlete.js" );
var WaterBottle = require( "../water_bottle.js" );

describe("Athlete WaterBottle Integration", function(){
beforeEach(function() {
  athlete = new Athlete();
  bottle = new WaterBottle();
  bottle.fill();
})

it("increase hydration by drinking", function(){

  athlete.drink(bottle, 10);
  assert.strictEqual(athlete.hydration, 110);
})







})