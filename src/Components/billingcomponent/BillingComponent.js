import React from 'react';

import checkMark from '../../assets/icons/check-mark.svg';
import holstee from '../../assets/icons/holstee-logo@2x.png';
import integrated from '../../assets/icons/integratedhealth-logo@2x.png';
import { BILLING_INFO } from '../../constants/constants';
import './BillingComponent.scss';

function LineComponent() {
    return (
        <div className="box col-12">
            <div className="line">
                <div className="triangle">
                </div>
            </div>
        </div>
    );
}

function BillingComponent() {
    return (
        <div className="billig-section">
            <div className="billing-section-row row">
                <div className="col-12 col-md-5 offset-md-1 billing-info">
                    <div className="header col-12">
                        RECURRING BILLING DONE RIGHT
                    </div>
                    <div className="sub-header col-12">
                        We’ve built the best practices
                        required for every billing model
                    </div>
                    {
                        BILLING_INFO.map((value, index) => (
                            <div key={index} className="content-section col-12">
                                <span className="m-r-15px">
                                    <img src={checkMark} alt="check-mark" className="checkmark" />
                                </span>
                                <div>
                                    <div className="title">
                                        {value.title}
                                    </div>
                                    <div className="sub-header desc">
                                        {value.description}
                                    </div>
                                </div>
                            </div>
                        ))
                    }                    
                </div>
                <div className="col-12 col-md-5 offset-md-1 customer-info">
                    <div className="header col-12">
                        Some of our fantastic customers
                    </div>
                    <div className="set-max-width">
                        <div className="sub-header m-t-20px col-12">
                            ChargeBee solves a very tough
                            problem well. I couldn't imagine another
                            service fulling all our needs and doing it
                            so well.
                        </div>
                        <LineComponent />
                        <div className="client-section m-t-20px col-12">
                            <span className="m-r-15px">
                                <img src={holstee} alt="check-mark" className="logo" />
                            </span>
                            <div>
                                <div className="title">
                                    Thomas Reggi
                                </div>
                                <div className="sub-header desc url">
                                    holstee.com
                                </div>
                            </div>
                        </div>
                        <div className="sub-header m-t-20px col-12">
                            After switching to ChargeBee, it has
                            been much simpler to manage and set
                            up is a breeze. I absolutely love the
                            software and well worth the money
                        </div>
                        <LineComponent />
                        <div className="client-section m-t-20px col-12">
                            <span className="m-r-15px">
                                <img src={integrated} alt="check-mark" className="logo" />
                            </span>
                            <div>
                                <div className="title">
                                    Sunil
                                </div>
                                <div className="sub-header desc url">
                                    integratedhealth.us/
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingComponent;