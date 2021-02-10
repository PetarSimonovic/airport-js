class Airport {

  constructor(default_capacity = 1) {
    this.hanger = []
    this.DEFAULT_CAPACITY = default_capacity
  }

  storm() {
    let weather = Math.floor(Math.random() * 10)
    if (weather < 3) {
      return true;
    }
    else {
      return false;
    }
  }


  landPlane(plane) {

    let stormy_weather = this.storm();

    if (this.hanger.length === this.DEFAULT_CAPACITY) {
      throw new Error("Hanger full")
    }
    else if (stormy_weather === true) {
      throw new Error("Too stormy to land")
    }
    else {
    this.hanger.push(plane);
    }
  };

  takeoffPlane(plane) {
    let stormy_weather = this.storm();

    if (stormy_weather === true) {
      throw new Error("Too stormy to fly")
    }
    else {
      let index = this.hanger.indexOf(plane)
      this.hanger.splice(index, 1);
    }
  };
};
