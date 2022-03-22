import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { environment } from 'src/core/config/environment';
import { endpoints } from 'src/core/endpoints/items';
import { ProductImage } from 'src/components/ProductImage';
import { ProductAmount } from 'src/components/ProductAmount';
import { Button } from 'src/components/Button';
import { BreadCrumbs } from 'src/components/BreadCrumbs';
import freeShippingLogo from 'src/assets/images/ic_shipping.png';
import './style.scss';

const ProductDetail = (props) => {

    const [detail, setDetail] = useState({
        author: {}, item: {}
    });
    const [categories, setCategories] = useState([]);
    const params = useParams();

    const requestItemDetail = () => {
        axios.get(`${environment.apiUrl}${endpoints.items}/${params.id}`)
            .then(response => {
                if (response && response.data) {
                    setDetail(response.data);
                }
            })
            .catch(error => {

            })
    }

    const getCondition = (condition) => {
        switch (condition) {
            case 'new':
                return 'Nuevo';
            case 'used':
                return 'Usado';
            default:
                return 'No especificado';
        }
    };

    const getDescription = () => {
        if (detail.item && detail.item.description) {
            return detail.item.description.split('\n').map((i, key) => {
                if (i) {
                    return <span className='line--description' key={key}>{i} <br /> </span>;
                } else {
                    return <br key={key} />;
                }
            });
        } else {
            return 'Sin descripción';
        }
    };

    useEffect(() => {
        if (props.location.state && props.location.state.categories) {
            setCategories(props.location.state.categories);
        }
        requestItemDetail();
    }, []);

    return (
        <div className='container h-100 product__detail'>
            <BreadCrumbs categories={categories} />
            <div className='product__detail--body'>
                <ProductImage src={detail.item.picture} />
                <div className='product__detail--data'>
                    <div className='product__detail--data-condition'>
                        {getCondition(detail.item.condition)} - {detail.item.sold_quantity} vendidos
                    </div>
                    <div className='product__detail--data-title'>
                        {detail.item.title}
                    </div>
                    <div className='product__detail--data-price'>
                        <span className='product__detail--data-price--currency'>
                            {detail.item.price?.currency}
                        </span>
                        <ProductAmount size='big' price={detail.item.price} />
                        {detail.item.free_shipping && <img className="free-shipping-icon" src={freeShippingLogo} alt="Envío gratis" />}
                    </div>
                    <Button
                        type='button'
                        title='Comprar'
                    />
                </div>
                <div className='product__detail--description-title'>
                    Descripción del producto
                </div>
                <p className='product__detail--description'>
                    {getDescription()}
                </p>
            </div>
        </div>
    );
}

export { ProductDetail };