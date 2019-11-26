import React, { Component } from 'react';
import bannerImage from '../../assets/icons/banner-image@2x.png';
import bannerArrow from '../../assets/icons/banner-arrow@2x.png';
import './SignupComponent.scss';

class SignupComponent extends Component {
    render() {
        return (
            <div className="row sign-up-section">
                <header className="App-header col-12">
                    SUBSCRIPTION BUSINESS MADE EASY
                </header>
                <header className="App-info col-12">
                    We teamed up with Amazon to make recurring
                    billing a breeze for you.
                </header>
                <div className="col-12">
                    <div className="row banner-section">
                        <div className="col-4 col-md-4 col-lg-2 col-xl-3">
                            <div className="banner-common-font charge-bee">
                                CHARGEBEE
                            </div>
                        </div>
                        <div className="col-5 col-md-4 col-lg-3 col-xl-2">
                            <img className="banner-icon" src={bannerImage} alt="bannerimage" />
                        </div>
                        <div className="col-3 col-md-4 col-lg-3 col-xl-3">
                            <div className="banner-common-font">
                                PAY WITH AMAZON
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                <div className="sign-up-section">
                    <button className="sign-up-btn c-pointer">
                    SIGNUP & EXPLORE NOW
                    </button>
                </div>
                </div>
                <header className="see-experience col-12">
                    Neatly integrated experience.
                    See how it works
                </header>
                <div className="scroll-down-section col-12" onClick={() => {this.props.scrollToView();}}>
                    <img src={bannerArrow} alt="arraow" className="banner-arrow c-pointer" />
                </div>
            </div>
        )
    }
}

export default SignupComponent;