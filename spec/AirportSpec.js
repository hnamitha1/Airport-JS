describe("Airport", function() {
	var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it("instructs a plane to land", function() {
    expect(airport.land(plane)).toEqual(plane);
  });
});
