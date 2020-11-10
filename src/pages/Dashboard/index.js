import React, { useEffect, useState } from 'react';
import { paySoon } from '../../utils';

import SectionSub from '../../components/SectionSub';
import Subscription from './Subscription';
import NeedLogin from '../../components/NeedLogin';
import Counter from '../../components/Counter';
import Graph from './Graph';

const Dashboard = (props) => {
  const { signInUser, streaming, review } = props;
  const [user, setUser] = useState('회원');
  const [cost, setCost] = useState(0);
  const [soon, setSoon] = useState([]);

  useEffect(() => {
    if (signInUser) {
      setUser(signInUser.name);
    }
    if (streaming) {
      setCost(
        streaming.reduce((acc, cur) => {
          return acc + cur.price;
        }, 0)
      );

      setSoon(paySoon(streaming, 5));
    }
  }, [signInUser, streaming]);

  const yourStreaming = !streaming ? (
    <NeedLogin
      type={`jump`}
      description1={`회원님이 현재 구독하는 서비스를 한눈에 볼 수 있습니다.`}
      description2={`현재 구독하는 서비스를 등록/삭제 할 수 있습니다.`}
    />
  ) : (
    <Subscription {...props} />
  );

  const pageTop = signInUser ? (
    <div className="page-top-description">
      <p>
        <span className="user">{user}</span> 님은
      </p>
      <p>
        현재 <span className="user">{streaming.length}개</span>의 OTT 서비스를
        이용중이며,
      </p>
      <p>
        매달 <Counter target={cost} type={`cost`} />
        원을 지불하고 있습니다.
      </p>
      <p>
        그리고 총 <Counter target={review.length} type={`length`} />
        개의 리뷰를 작성하셨습니다.
      </p>
      {soon.length > 0 && (
        <p>
          5일 내로 결제될 OTT서비스가 <span>{soon.length}개</span> 있습니다.
          <br></br>
          {`>>> ${soon.join(', ')}`}
        </p>
      )}
    </div>
  ) : (
    <>
      <div className="page-top-title">Dashboard</div>
      <div className="page-top-description">
        회원님의 구독 서비스 통계를 한번에 볼 수 있습니다.
      </div>
    </>
  );

  const graph = !signInUser ? (
    <NeedLogin
      type={`graph`}
      description1={`회원님이 구독하는 OTT관련 통계를 볼 수 있습니다.`}
      description2={`등록된 리뷰를 바탕으로 이용량, 만족도, 사용 비율 등의 내용을 볼 수 있습니다.`}
    />
  ) : (
    <Graph review={review} />
  );

  return (
    <article>
      <section>
        <div className={`container bg-streaming page-top`}>{pageTop}</div>
      </section>
      <SectionSub
        color={`skyblue`}
        title={`Your Subscription`}
        description={`${user}님이 현재 구독하는 스트리밍 서비스입니다.`}
        body={yourStreaming}
      />
      <SectionSub
        title={`DashBoard`}
        layout={`chart layout-column`}
        description={`${user}님의 OTT 서비스 통계입니다.`}
        body={graph}
      />
    </article>
  );
};

export default Dashboard;
