import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  /**
   * Returns the symbol for a given currency name.
   * @param currencyName The name of the currency (e.g., 'dollar').
   * @returns The currency symbol or an empty string if not found.
   */
  public getCurrentSymbol(currencyName: string): string {
    if (!currencyName) {
      return '';
    }

    switch (currencyName.toLowerCase()) {
      case 'dollar':
        return '$';
      // This can be expanded with more currencies in the future
      // case 'euro':
      //   return '€';
      default:
        return '';
    }
  }
}
