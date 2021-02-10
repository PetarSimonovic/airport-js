"use strict";

describe("Airport", function() {

  it("should have an array", function() {
    let airport = new Airport();
    expect(airport.hanger).toEqual([]);
  });

  it("can add item to hanger array", function() {
    let airport = new Airport();
    airport.landPlane("plane");
    expect(airport.hanger).toEqual(["plane"]);
  });

  it("can remove an item from the hanger array", function () {
    let airport = new Airport(2);
    airport.landPlane("Spitfire");
    airport.landPlane("Boeing");
    airport.takeoffPlane("Spitfire");
    expect(airport.hanger).not.toContain("Spitfire");
    expect(airport.hanger).toContain("Boeing");
  });

  it("prevents landing when full", function() {
      let airport = new Airport();
      airport.landPlane("plane");
      expect(function () {
        airport.landPlane("another plane");
        }).toThrowError("Hanger full");
  });

  it("has a default capacity that can be overridden", function() {
    let airport = new Airport(3);
    airport.landPlane("spit");
    airport.landPlane("plane");
    airport.landPlane("plane");
    expect(function () {
      airport.landPlane("another plane");
      }).toThrowError("Hanger full");
    });

});
