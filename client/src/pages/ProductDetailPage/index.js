import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { environment } from 'src/core/config/environment';
import { endpoints } from 'src/core/endpoints/items';
import { ProductImage } from 'src/components/ProductImage';
import { ProductAmount } from 'src/components/ProductAmount';
import { Button } from 'src/components/Button';
import { BreadCrumbs } from 'src/components/BreadCrumbs';
import './style.scss';

const ProductDetail = (props) => {

    const [detail, setDetail] = useState({
        author: {}, item: {}
    });
    const [categories, setCategories] = useState([]);
    const params = useParams();
    const text = "CAMA 1 PLAZA CON REPISA\n\n- Apto para colchon 190 cm x 80 cm \n- Respaldo con 3 estantes \n- Parrilla de madera maciza y 2 patas adicionales \n- Melamina de 15 mm\n-Incluye el Manual de armado\n\n- Medidas del Mueble Armado\n* Ancho: 93 cm\n- Alto: 90 cm\n- Largo: 211 cm\n\n- Medidas en caja:\n-Caja 1: 93 cm x45 cm x 10 cm - Peso: 21 kg\n-Caja 2: 193 cm x 23 cm x 5 cm - Peso: 11 kg\n\n\nLos muebles Orlandi se entregan desarmados, listos para el ensamble, embalados en una sólida caja de cartón corrugado impresa con el nombre, imagen y descripción del producto\nque contiene en su interior.\nSus piezas son herméticamente protegidas por una lámina de polietileno.\nLos ensambles se realizan mediante un sistema de herrajes de unión que facilitan el armado,\nmanteniendo siempre el mueble firme y ajustado. Se adjunta un manual con sencillas\ninstrucciones para que cualquier persona arme el mueble en pocos minutos\nen el lugar donde va a ser instalado.\n\n-----------------------------------------------------------------------------------------------------------------------\n-----------------------------------------------------------------------------------------------------------------------\n\nForma de Envíos \n\n * Todo el país: Consultar costo de envío (a cargo del comprador)- Despachamos a todo el país a través de transporte expreso.\n\n * ZONAS ENVÍO GRATIS: \n\n- Avellaneda, Wilde, Villa Domínico, Sarandí - ENVÍO GRATIS\n\n- Bernal, Don Bosco, Ezpeleta, Quilmes, San Francisco Solano - ENVÍO GRATIS\n\n- Berazategui, Hudson, Gutiérrez, Ranelagh, Sourigues, Pereyra, Plátanos, Villa España y El Pato - ENVÍO GRATIS\n\n- Florencio Varela, Bosques, Zeballos, Ingeniero J. Allan - ENVÍO GRATIS\n\n- El Peligro, Villa Elisa, City Bell - ENVÍO GRATIS\n\n- La Plata - ENVÍO GRATIS\n\n\n-----------------------------------------------------------------------------------\n-----------------------------------------------------------------------------------\nJUAREZ CONFORT 52º Aniversario! \n\nSOMOS MERCADO LIBRE PLATINUM\n\n¡¡Más de medio siglo brindando el mejor servicio al cliente!!";

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
                    return <span key={key}>{i} <br /> </span>;
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