import React from 'react';

import checkoutIcon from '../../assets/icons/checkout@2x.png';

import './CheckoutComponent.scss';

function CheckoutComponent() {
    return (
        <div className="checkout-section set-background row">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 image-section">
                <div className="col-12 phone-grid">
                    <div className="icon-section">
                        <img src={checkoutIcon} alt="Checkout" className="checkout-icon" />
                        <div className="button-section hide-sm" />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3 customer-portal hidden-sm-up">
                <div className="row content">
                    <div>
                        CUSTOMER
                        PORTAL
                    </div>
                    <div className="description m-t-20px">
                        Go a step further and let your customers
                        be in charge of theri subscriptions
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default CheckoutComponent;