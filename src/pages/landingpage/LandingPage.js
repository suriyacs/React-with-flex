import React, { Component, Fragment } from 'react';

import SignupComponent from '../../Components/signcomponent/SignupComponent';
import StepsComponent from '../../Components/stepscomponent/StepsComponent';
import CheckoutComponent from '../../Components/checkoutcomponent/CheckoutComponent';
import BillingComponent from '../../Components/billingcomponent/BillingComponent';
import FooterComponent from '../../Components/footercomponent/FooterComponent';

class LandingPage extends Component {

    scrollInto() {
        const element = document.getElementById('footer');
        element.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }

    render() {
        return (
            <Fragment>
                <SignupComponent scrollToView={this.scrollInto} />
                <StepsComponent />
                <CheckoutComponent />
                <BillingComponent />
                <FooterComponent />
            </Fragment>
        );
    }
}

export default LandingPage;