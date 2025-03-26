/* eslint-disable */
export default class Airport {
  // Constructor to initialize the attributes
  constructor(name, code) {
    this._name = name; // Store name in _name
    this._code = code; // Store code in _code
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = newCode;
  }

  // Override the default toString method
  toString() {
    return `[object ${this._code}]`;
  }
}