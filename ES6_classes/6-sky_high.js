import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Validate and convert inputs to numbers
    const parsedSqft = Number(sqft);
    const parsedFloors = Number(floors);

    // Check if conversion results in valid numbers
    if (isNaN(parsedSqft) || isNaN(parsedFloors)) {
      throw new TypeError('Inputs must be numbers');
    }

    // Call parent constructor with sqft
    super(parsedSqft);

    // Store floors as an instance attribute
    this._floors = parsedFloors;
  }

  // Getter for sqft (inherited from parent)
  get sqft() {
    return this._sqft;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
