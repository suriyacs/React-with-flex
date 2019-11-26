import React from 'react';

import { CLIENT_LOGO_LIST } from '../../constants/constants';

import './FooterComponent.scss';

function FooterComponent() {
    return (
        <div id="footer" className="footer-section">
            <div className="client-list-section">
                <div className="col-12 col-md-11 offset-md-1">
                    <div className="row m-y-30px">
                        {
                            CLIENT_LOGO_LIST.map((value, index) => (
                                <div key={index} className="col-5 col-md-6 col-lg-4 col-xl-2">
                                    <img src={value} alt="client-logo" className="client-logo c-pointer" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="col-12 col-md-8 offset-md-2">
                    <div className="row m-y-30px justify-content-center">
                        <div className="c-pointer info col-12 col-md-2">
                            PRICING
                        </div>
                        <div className="c-pointer info col-12 col-md-2">
                            FEATURES
                        </div>
                        <div className="c-pointer info col-12 col-md-2 d-m-none">
                            <a href="https://www.chargebee.com" target="_blank">
                                <img src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
                                    alt="charge-bee"
                                    className="chargebee-icon"
                                />
                            </a>
                        </div>
                        <div className="c-pointer info col-12 col-md-2">
                            ABOUT
                        </div>
                        <div className="c-pointer info col-12 col-md-2">
                            SUPPORT
                        </div>
                        <div className="c-pointer info col-12 col-md-2 d-none d-m-show">
                            <a href="https://www.chargebee.com" target="_blank">
                                <img src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg"
                                    alt="charge-bee"
                                    className="chargebee-icon"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterComponent;