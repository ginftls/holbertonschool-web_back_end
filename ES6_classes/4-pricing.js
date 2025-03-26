/* eslint-disable no-unused-vars */
import Currency from './3-currency.js';
/* eslint-enable no-unused-vars */

export default class Pricing {
  // Constructor to initialize the attributes
  constructor(amount, currency) {
    this._amount = amount; // Store amount in _amount
    this._currency = currency; // Store currency in _currency
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
