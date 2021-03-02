import React, { useEffect, useState } from 'react';

const Form = ({ heading, inputFields }) => {
  return (
    <>
      <form>
        <h2>{heading}</h2>
        {inputFields.map((field, index) => {
          return <div key={index}>
            {/* This conditional rendering of the field heading allows you to
              create and separate groups of input fields in a form.
              i.e. text inputs, radio inputs, etc
              NOTE: Ensure the first input in the set has the 'heading' key */}
            {field.heading ? <h3>{field.heading}</h3> : null}
            <input
              name={field.name}
              placeholder={field.placeholder || null}
              required={field.required || null}
              type={field.type || 'text'}
              defaultValue={field.defaultValue || ''}
          />
            {/* Depending on the type of input, different attributes will be 
            linked to the 'for' attribute on the label element */}
            {field.label && field.placeholder ? <label htmlFor={field.placeholder}>{field.label}</label> : null}
            {field.label && field.defaultValue ? <label htmlFor={field.defaultValue}>{field.label}</label> : null}
          </div>
        })}
        <input type='submit' value='Submit' />
      </form>
    </>
  )
}

export default Form;
