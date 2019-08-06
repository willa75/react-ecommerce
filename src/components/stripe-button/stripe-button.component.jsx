import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_cXgP0ZgzrzqOkDtW7cuCA7Uc00QQSGYrHV';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='React Ecommerce App'
            billingAddress
            shippingAddress
            stripeKey={publishableKey}
            amount={priceForStripe}
            currency='USD'
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;
