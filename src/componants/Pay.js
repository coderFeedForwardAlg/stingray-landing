
import React, { useState, useEffect } from 'react';

const ProductDisplay = () => (
    <section>
      <div className="product">
        
        <div className="description">
          <h3>Starter plan</h3>
          <h5>$20.00 / month</h5>
        </div>
      </div>
      <form action="/create-checkout-session" method="POST">
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type="hidden" name="lookup_key" value="price_1Q5cs4RsZwVCiRIQVmxswoNb" />
        <button id="checkout-and-portal-button" type="submit">
          Checkout
        </button>
      </form>
    </section>
  );

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );




export default function Pay() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay />
  );
}