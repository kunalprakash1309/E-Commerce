import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I3BBqLMDq0CqiZu70vemMop9dtqt96rYqmjHBomuA1vwmrjdqDv0G529u5fBuht18Az4wnxJLvZf0gw6yrBqW0Q00hhzo1mdQ'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton