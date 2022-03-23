import { itemsModel } from './../models/items.model';

describe('API Item Model', () => {

  test('Retorna siempre un valor false cuando no se envía datos', () => {
    expect(itemsModel._getShippingModel()).toBeFalsy();
  });

  test('Retorna siempre un valor true cuando se envía el valor', () => {
    expect(itemsModel._getShippingModel({ free_shipping: true })).toBeTruthy();
  });

});