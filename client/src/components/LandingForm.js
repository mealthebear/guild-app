import React, { useState } from 'react';

const LandingForm = (props) => {
  const inputs = [
    { label: 'Character Name' },
    { label: 'Realm' },
    { label: 'Spec(s) Preferred' },
    { label: 'Battle.net Tag' },
  ];

  return (
    <form id="landing-form">
      {inputs.map((input, index) => {
        return <div className="input-field-group-landing" key={index}>
          <label className="form-label-landing">{input.label}</label>
          <input className="form-input-landing" />
        </div>
      })}
      <div className="input-field-group-landing landing-message-group">
        <label className="form-label-landing">Message</label>
        <input className="message-input-landing" />
      </div>
      <input className="heading-landing-button landing-form-submit" type="submit" value="Send Message" />
    </form>
  )
}

export default LandingForm;
