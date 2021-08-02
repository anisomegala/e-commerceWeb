import React from 'react';
import  StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceStripe = price * 100;
    const publishableKey = 'pk_live_51JIrPAJgQ7t0AZ9nOZap3rx0HtcB1n0VumpB2ffB8pTskB3hbvKeMLBBQFqYUWCfKMsa70vgmrLYYUdoRJE7kWWp00NfRMRCEa'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='EWANIEL Clothing App'
            billingAddress
            shippingAddress
            allowRememberMe
            description={`The total is $${price}`}
            amount={priceStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency="PLN"
        />
    )
};

export default StripeCheckoutButton;