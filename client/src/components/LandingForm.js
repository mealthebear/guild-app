import React, { useState } from 'react';

const LandingForm = (props) => {
  const inputs = [
    { label: 'Character Name' },
    { label: 'Realm' },
    { label: 'Spec(s) Preferred' },
    { label: 'Battle.net Tag' },
  ];

  return (
    <form>
      {inputs.map((input, index) => {
        return <div className="input-field-group-landing">
          <label>{input.label}</label>
          <input className="form-input-landing" />
        </div>
      })}
      <div className="input-field-group-landing landing-message-group">
        <label>Message</label>
        <input className="form-input-landing" />
      </div>
      <input className="landing-form-submit" type="submit" value="Send Message" />
    </form>
  )
}

export default LandingForm;
