import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../components/Button';
import { create } from 'react-test-renderer';

describe('<Button />', () => {
  test('Should render without problems', () => {
    shallow(<Button />);
  })
});

describe('<Button /> Snapshot', () => {
  test('Should render the same interface as the Snapshot', () => {
    const button = create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  })
});