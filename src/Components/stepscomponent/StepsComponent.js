import React, { Component } from 'react';

import { STEPS } from '../../constants/constants';
import './StepsComponent.scss';

class StepsComponent extends Component {
    render() {
        return (
            <div className="steps-component-section row">
                <div className="col-12 col-md-8 title-section">
                    <header className="title-word">
                        Eliminate the need for credit card entry with Login & Pay with Amazon
                    </header>
                </div>
                <div className="col-12 col-md-8">
                    <div className="row steps">
                        {
                            STEPS.map((value, index) => (
                                <div key={index} className="col-12 col-md-4 col-lg-3 col-xl-2">
                                    <div className={`step ${index === 3 ? 'last-step' : ''}`}>
                                        {value}
                                    </div>                            
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default StepsComponent;