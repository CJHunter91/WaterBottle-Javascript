var assert = require( "assert" );
var Athlete = require ("../athlete.js" );


describe("Athlete", function(){
  
  beforeEach(function(){
    athlete = new Athlete();
  });

  it("Hydration starts at 100", function() {
    assert.strictEqual(athlete.hydration, 100);
  })

  it("distance covered starts at 0", function(){
    assert.strictEqual(athlete.distanceCovered, 0);
  })

  it("be able to run", function() {
    athlete.run();
    assert.strictEqual(athlete.distanceCovered, 10);
  })

  it("remove hydration while running", function() {
    athlete.run();
    assert.strictEqual(athlete.hydration, 90);
  })
  it("can't run if hydration == 0", function(){
    athlete.hydration = 0;
    athlete.run();
    assert.strictEqual(athlete.distanceCovered, 0);
  })






})