// plop-templates/reactComponent.hbs
import React from 'react';
import './style.css'; // Import the CSS file

const MyButton = ({ /* your props */ }) => {
  return (
    <div className="my-button">
      {/* Your component content goes here */}
      Hello, I am the MyButton component!
    </div>
  );
};

export default MyButton;