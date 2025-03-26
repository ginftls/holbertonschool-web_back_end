export default class Building {
  // Constructor to initialize the attributes
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly');
    }
    this._sqft = sqft; // Store sqft in _sqft
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method evacuationWarningMessage
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
