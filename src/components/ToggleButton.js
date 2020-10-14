import React from 'react';

import { FiSettings } from 'react-icons/fi';

const Toggle = (props) => {
  const { handleToggle, type, isChecked, text } = props;
  let icon;

  if (type === 'setting') {
    icon = <FiSettings />;
  }

  return (
    <>
      <input
        type="checkbox"
        onChange={handleToggle}
        checked={isChecked}
        id={`${type}`}
        className={`invisible ${type}-checkbox`}
      />
      <label className={`${type}-label`} htmlFor={`${type}`}>
        {icon}
        {text}
      </label>
    </>
  );
};

export default Toggle;
