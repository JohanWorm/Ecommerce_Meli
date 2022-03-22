import React from 'react';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProductItem } from '../components/ProductItem';
import { MockHistoryPush } from '../__mocks__/MockHistoryPush';
import { ProductItemMock } from '../__mocks__/ProductItemMock';
import { CategoriesMock } from '../__mocks__/CategoriesMock';



describe('<ProductItem />', () => {
    it('Render del componente ProductItem', () => {
        const productItem = shallow(
            <ProductItem data={ProductItemMock} />
        );
        expect(productItem).toHaveLength(1);
    });

    it("Debería renderizar sin problemas", () => {
        shallow(<ProductItem data={ProductItemMock} />);
    });

    it("Debería renderizar sin problemas con un producto vacío", () => {
        shallow(<ProductItem data={{}} />);
    });

    it("Debería renderizar sin problemas sin un producto", () => {
        shallow(<ProductItem />);
    });

    it("Debería renderizar sin problemas el titulo del producto", () => {
        const wrapper = shallow(<ProductItem data={ProductItemMock} />);
        expect(wrapper.find('.product__item--data-title').contains(ProductItemMock.title)).toEqual(true);
    });

    it('Comprobar click para ir al detalle', () => {
        const goToDetail = jest.fn()
        const wrapper = mount(
            <MemoryRouter>
                <ProductItem
                    data={ProductItemMock}
                    categories={CategoriesMock}
                    goToDetail={goToDetail} />
            </MemoryRouter>
        );
        const itemPrice = wrapper.find('.product__item--data-price');
        userEvent.click(itemPrice);

        expect(MockHistoryPush.length).toBe(2);
        expect(MockHistoryPush.location.pathname).toBe(`/items/${ProductItemMock.id}`);
    });

});