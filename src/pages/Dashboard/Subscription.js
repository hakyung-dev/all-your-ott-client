import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { removeStreamingApi } from '../../api';

import Setting from './Setting';
import Toggle from '../../components/ToggleButton';
import stand from '../../styles/images/stand.png';

const NowStreaming = (props) => {
  const { streaming, signInUser, setStreaming } = props;
  const [mode, setMode] = useState(false);

  const handlemode = () => {
    setMode(!mode);
  };

  const modeEffect = mode ? ` shake` : ``;

  const serviceList = !streaming.length ? (
    <div className={`card bg-white`}>
      <img src={stand} className="img-card" alt="stand" />
      <div>서비스를 등록하세요.</div>
    </div>
  ) : (
    streaming.map((stream, i) => {
      const streamingId = {
        streamingId: stream._id,
      };
      const handleDel = async (e) => {
        const result = await removeStreamingApi(signInUser._id, streamingId);
        if (result.status === 200) {
          setStreaming(result.data.streaming);
        }
      };

      const isDelButton = mode ? (
        <button className="item-del" onClick={handleDel}>
          <MdClose />
        </button>
      ) : (
        <div className="item-del"></div>
      );

      return (
        <div
          className={`card stream-item bg-card-logo ${stream.service_name}${modeEffect}`}
          key={i}
        >
          <>{isDelButton}</>
          <div>
            <div className="item-name">{stream.service_name}</div>
            <div className="item-body">
              매월 {stream.billing_date}일, <br></br>
              {stream.price}원이 결제됩니다.
            </div>
          </div>
        </div>
      );
    })
  );
  return (
    <>
      <ul className="rowToColumn">
        {serviceList}
        {mode && <Setting {...props} closeMode={handlemode} />}
      </ul>
      <Toggle
        handleToggle={handlemode}
        type={`setting`}
        isChecked={mode}
        text={` Streaming 설정`}
      />
    </>
  );
};

export default NowStreaming;
