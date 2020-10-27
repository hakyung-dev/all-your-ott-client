import React from 'react';

import { FiSettings, FiLogIn } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

const Toggle = (props) => {
  const { handleToggle, type, isChecked, text } = props;
  let icon;

  if (type === 'setting') {
    icon = <FiSettings />;
  } else if (type === 'del') {
    icon = <RiDeleteBinLine />;
  } else if (type === 'side') {
    icon = <FiLogIn />;
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
