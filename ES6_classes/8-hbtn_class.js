/* eslint-disable */
export default class HolbertonClass {
  // Constructor to initialize the attributes
  constructor(size, location) {
    this._size = size; // Store size in _size
    this._location = location; // Store location in _location
  }

  // Getter for size
  get size() {
    return this._size;
  }

  // Setter for size
  set size(newSize) {
    this._size = newSize;
  }

  // Getter for location
  get location() {
    return this._location;
  }

  // Setter for location
  set location(newLocation) {
    this._location = newLocation;
  }

  // Override valueOf to cast the class into a Number
  valueOf() {
    return this._size;
  }

  // Override toString to cast the class into a String
  toString() {
    return this._location;
  }
}