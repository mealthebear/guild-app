import RegisterMessage from './RegisterMessage.js';
import React, { useState } from 'react';

const LandingForm = (props) => {
  const [battleTag, setBattleTag] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [message, setMessage] = useState('');
  const [realm, setRealm] = useState('');
  const [spec, setSpec] = useState('');

  const inputs = [
    { onChange: (event) => setCharacterName(event.target.value), label: 'Character Name' },
    { onChange: (event) => setRealm(event.target.value), label: 'Realm' },
    { onChange: (event) => setSpec(event.target.value), label: 'Spec(s) Preferred' },
    { onChange: (event) => setBattleTag(event.target.value), label: 'Battle.net Tag', required: 'required' },
  ];

  const submitUser = async (event) => {
    event.preventDefault()
    const userObject = {
      message: message,
      name: characterName,
      realm: realm,
      spec: spec,
      tag: battleTag,
    };
    props.createUser(event, userObject);
  };

  return (
    <form id="landing-form" onSubmit={(event) => submitUser(event)}>
      {inputs.map((input, index) => {
        return <div className="input-field-group-landing" key={index}>
          <label className="form-label-landing">{input.label}</label>
          <input className="form-input-landing" onChange={input.onChange} required={input.required} />
        </div>
      })}
      <div className="input-field-group-landing landing-message-group">
        <label className="form-label-landing">Message</label>
        <textarea className="message-input-landing" onChange={(event) => setMessage(event.target.value)} />
      </div>
      <input className="heading-landing-button landing-form-submit" type="submit" value="Send Message" />
      {props.showMessage ? <RegisterMessage messageType={props.messageType} /> : null}
    </form>
  )
}

export default LandingForm;
