import React from 'react';

import Style from './style/default-text.module.scss'

const DefaultText = ({
  onChange,
  value,
  name,
  label,
  type='text',
  className,
  placeholder,
  required
}) => {
  return (
    <label className={`${className} d-flex flex-column`}>
      <span>{label}</span>
      <input
        onChange={onChange}
        value={value}
        className={Style['inp']}
        type={type}
        name={name}
        required={required}
      />
    </label>
  )
};

export default DefaultText;
