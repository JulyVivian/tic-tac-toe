// plop-templates/reactComponent.hbs
import React from 'react';
import './style.css'; // Import the CSS file

const PrimaryButton = ({ /* your props */ }) => {
  return (
    <div className="primary-button">
      {/* Your component content goes here */}
      Hello, I am the PrimaryButton component!
    </div>
  );
};

export default PrimaryButton;