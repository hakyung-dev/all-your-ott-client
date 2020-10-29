import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { addStreamingApi } from '../../api';

const SettingStreaming = (props) => {
  const { signInUser, closeMode, setStreaming } = props;
  const [values, setValues] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => setError(''), 2000);
  }, [error]);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.toUpperCase() });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const { service_name, price, billing_date } = values;

    if (!service_name || !price || !billing_date) {
      return setError('모든 항목을 입력해 주세요.');
    }

    const result = await addStreamingApi(signInUser._id, values);
    if (result.status === 200) {
      setStreaming(result.data.streaming);
    } else {
      setError(result.data.message);
    }
  };

  return (
    <div className="card bg-white">
      <button className="item-del" onClick={closeMode}>
        <MdClose />
      </button>
      <form className="form-underline" onSubmit={handleAdd}>
        <input
          className="input-add-name"
          type="text"
          onChange={handleChange}
          name="service_name"
          placeholder="어떤 서비스를 이용하시나요?"
        />
        <div>
          <input
            className="input-add"
            type="number"
            onChange={handleChange}
            name="price"
            placeholder="결제 금액"
          />
          <label>원 /월</label>
        </div>
        <div>
          <input
            className="input-add"
            type="number"
            min={1}
            max={31}
            onChange={handleChange}
            name="billing_date"
            placeholder="결제일"
          />
          <label>일</label>
        </div>
        <div className="error">{error}</div>
        <button className="submit-small" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default SettingStreaming;
