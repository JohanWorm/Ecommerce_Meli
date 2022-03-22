import React from 'react';
import { mount, shallow } from 'enzyme';
import { SearchBox } from '../../components/SearchBox';

describe('<SearchBox />', () => {
    test('Render del componente SearchBox', () => {
        const searchBox = mount(<SearchBox />);
        expect(searchBox.length).toEqual(1);
    });
});