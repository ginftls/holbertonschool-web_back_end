export default class Currency {
  // Constructor to initialize the attributes
  constructor(code, name) {
    this._code = code; // Store code in _code
    this._name = name; // Store name in _name
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = newCode;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = newName;
  }

  // Method to display the full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
