import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../components/Button';

describe('<Button />', () => {
    test('Render del componente Button', () => {
        shallow(<Button />);
    })
});