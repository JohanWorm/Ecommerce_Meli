import React from 'react';
import { mount } from 'enzyme';
import { SearchBox } from '../components/SearchBox';

describe('<SearchBox />', () => {
  test('Should render without problems', () => {
    const searchBox = mount(<SearchBox />);
    expect(searchBox.length).toEqual(1);
  });
});