import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../../../assets/images/price.jpg';

const Prices = () => {
  const [currency, setCurrency] = useState('USD');
  const [convertedPrices, setConvertedPrices] = useState({});
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  // Categories of items and prices in default currency (USD)
  const categories = [
    { name: 'Basic Plan', price: 10, description: 'This plan provides access to a limited range of items and allows you to post up to 5 adverts per month.' },
    { name: 'Standard Plan', price: 20, description: 'The Standard Plan offers access to most items, allows posting up to 15 adverts per month, and includes basic analytics.' },
    { name: 'Premium Plan', price: 30, description: 'With the Premium Plan, enjoy unlimited access to all items, 50 adverts per month, enhanced analytics, and priority support.' },
    { name: 'Ultimate Plan', price: 50, description: 'The Ultimate Plan provides unlimited adverts, advanced analytics, and premium support, including personalized consulting.' },
  ];

  // Handle currency conversion
  const convertCurrency = (currency) => {
    axios.get(`https://api.exchangerate-api.com/v4/latest/USD`)
      .then(response => {
        const rates = response.data.rates;
        const newPrices = categories.map(category => ({
          ...category,
          price: (category.price * rates[currency]).toFixed(2),
        }));
        setConvertedPrices(newPrices);
        setCurrency(currency);
      })
      .catch(error => console.error('Error fetching currency rates:', error));
  };

  const handlePayment = (plan) => {
    setSelectedSubscription(plan);
    // Handle payment logic here
    alert(`Ready to explour our ${plan.name}! Make Payment`);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat p-6"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-6">Prices & Subscriptions</h1>

        {/* Currency Converter */}
        <div className="flex justify-center items-center mb-6">
          <select
            className="bg-white text-gray-700 p-2 rounded shadow-lg"
            value={currency}
            onChange={(e) => convertCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="GHS">GHS</option>
          </select>
        </div>

        {/* Subscription Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {(convertedPrices.length ? convertedPrices : categories).map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h2>
              <p className="text-gray-600 mb-4">Price: {currency} {plan.price}</p>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-purple-800"
                onClick={() => handlePayment(plan)}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>

        {/* Payment Method */}
        <div className="mt-10">
          <h3 className="text-2xl text-white mb-4">Payment Option</h3>
          {selectedSubscription && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700">
                You selected the <strong>{selectedSubscription.name}</strong> for {currency}{' '}
                {selectedSubscription.price}. Proceed with payment.
              </p>
              {/* Payment Logic */}
              <button className="bg-purple-800 text-white px-4 py-2 rounded-lg mt-4 hover:bg-orange-500">
                Pay Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
