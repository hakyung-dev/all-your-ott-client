import React from 'react';

const Option = (props) => {
  const { options, type, handleOption } = props;

  const optionList =
    !options || options.length < 1 ? (
      <option disabled value>
        옵션을 먼저 등록하세요.
      </option>
    ) : (
      options.map((option, i) => {
        return (
          <option key={i} value={option.service_name}>
            {option.service_name}
          </option>
        );
      })
    );

  return (
    <label htmlFor={type}>
      <select id={type} name={type} onChange={handleOption} value={'DEFAULT'}>
        <option disabled value="DEFAULT">
          -- 옵션을 선택하세요. --
        </option>
        {optionList}
      </select>
    </label>
  );
};

export default Option;
