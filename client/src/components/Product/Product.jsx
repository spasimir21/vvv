import React from 'react';
import './Product.scss';
import { IconUsed } from '../../assets/IconUsed';
import { IconDelete } from '../../assets/IconDelete';

function Product({ isShown, setIsShown }) {

    return <div className="product_wrapper"  onClick={() => setIsShown(!isShown)}>
        <div className="product">
            <div className="image"><img width="57" height="56" src="https://pingo.bg/Content/products/4313/800-800.jpg" /></div>
            <div className="product_title">
                <div className="title">Velingrad water</div>
                <div className="price">0.90 lv</div>
            </div>
            <div className="expire_date">2 days left</div>
        </div>
        <div className={isShown ? 'show' : 'notshown'}>
                <div className="used"><IconUsed className="tick"/>Used</div>
                <div className="delete"><IconDelete className="bin"/>Delete</div>
        </div>
    </div>
}

export { Product };
