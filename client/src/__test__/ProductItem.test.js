import React from 'react';
import { shallow } from 'enzyme';
import { ProductItem } from '../components/ProductItem';
import { ProductItemMock } from '../__mocks__/ProductItemMock';

describe('<ProductItem />', () => {

  it('Should render without problems', () => {
    shallow(<ProductItem data={ProductItemMock} />);
  });

  it('Should render just fine with an empty product', () => {
    shallow(<ProductItem data={null} />);
  });

  it('Should render without issue without a product', () => {
    shallow(<ProductItem />);
  });

  it('Should render the product title without problems', () => {
    const wrapper = shallow(<ProductItem data={ProductItemMock} />);
    expect(wrapper.find('.product__item--data-title').contains(ProductItemMock.title)).toEqual(true);
  });

});