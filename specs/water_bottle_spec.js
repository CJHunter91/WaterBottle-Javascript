var assert = require( "assert" );
var WaterBottle = require( "../water_bottle.js" );
//what were testing against
describe( "Water Bottle", function() {

  beforeEach(function(){
    bottle = new WaterBottle();
  });

  it( "should be empty at start", function() {
    //something. is an object
    assert.strictEqual( bottle.volume, 0 )
  } )

  it( "on fill, volume should be 100", function() {
    bottle.fill();
    assert.strictEqual(bottle.volume, 100)
  })

  it("on drink remove amount", function(){
    bottle.fill();
    bottle.drink(10);
    assert.strictEqual(bottle.volume, 90);
  })

  it("should go to 0 when emptied", function() {
    bottle.fill();
    bottle.empty();
    assert.strictEqual(bottle.volume, 0);
  })

  it("shouldn't be able to go below 0", function(){
    bottle.drink(10);
    assert.strictEqual(bottle.volume, 0);
  })

  it("still drink remaining amount", function() {
    bottle.volume = 9;
    assert.strictEqual(bottle.drink(10), 9);
    assert.strictEqual(bottle.volume, 0);
    
  })



} )