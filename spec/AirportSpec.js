"use strict";

describe("Airport", function() {

  it("should have an array", function() {
    let airport = new Airport();
    expect(airport.hanger).toEqual([]);
  });

  it("can add item to hanger array", function() {
    let airport = new Airport();
    spyOn(airport,'storm').and.returnValue(false);
    airport.landPlane("plane");
    expect(airport.hanger).toEqual(["plane"]);
  });

  it("can remove an item from the hanger array", function () {
    let airport = new Airport(2);
    spyOn(airport,'storm').and.returnValue(false);
    airport.landPlane("Spitfire");
    airport.landPlane("Boeing");
    airport.takeoffPlane("Spitfire");
    expect(airport.hanger).not.toContain("Spitfire");
    expect(airport.hanger).toContain("Boeing");
  });

  it("prevents landing when full", function() {
      let airport = new Airport();
      spyOn(airport,'storm').and.returnValue(false);
      airport.landPlane("plane");
      expect(function () {
        airport.landPlane("another plane");
        }).toThrowError("Hanger full");
  });

  it("has a default capacity that can be overridden", function() {
    let airport = new Airport(3);
    spyOn(airport,'storm').and.returnValue(false);
    airport.landPlane("spitfire");
    airport.landPlane("plane");
    airport.landPlane("plane");
    expect(function () {
      airport.landPlane("another plane");
      }).toThrowError("Hanger full");
    });

    it("ocassionally generates a storm", function() {
      let airport = new Airport();
      let weather_test = [];
      while (weather_test.length <= 11) {
        weather_test.push(airport.storm());
      }
      expect(weather_test).toContain(true);
      expect(weather_test).toContain(false);
    });

    it("prevents landing when weather is stormy", function() {
      let airport = new Airport();
      spyOn(airport,'storm').and.returnValue(true);
      expect(function() {
        airport.landPlane("Boeing");
      }).toThrowError("Too stormy to land");
    });

    it("allows landing when weather is fine", function() {
      let airport = new Airport();
      spyOn(airport,'storm').and.returnValue(false);
      airport.landPlane("plane");
      expect(airport.hanger).toEqual(["plane"]);
    });

    it("blocks takeoff when weather is stormy", function () {
      let airport = new Airport(2);
      airport.hanger.push("Spitfire", "Boeing");
      spyOn(airport,'storm').and.returnValue(true);
      expect(function() {
        airport.takeoffPlane("Spitfire")
      }).toThrowError("Too stormy to fly");
      expect(airport.hanger).toContain("Spitfire");
      expect(airport.hanger).toContain("Boeing");
    });

});
