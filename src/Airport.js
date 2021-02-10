class Airport {

  constructor(default_capacity = 1) {
    this.hanger = []
    this.DEFAULT_CAPACITY = default_capacity
  }


  landPlane(plane) {
    if (this.hanger.length === this.DEFAULT_CAPACITY) {
      throw new Error("Hanger full")
    }
    else {
    this.hanger.push(plane);
  }
  };

  takeoffPlane(plane) {
    let index = this.hanger.indexOf(plane)
    console.log(index)
    console.log(plane)
    this.hanger.splice(index, 1);
  };
}
