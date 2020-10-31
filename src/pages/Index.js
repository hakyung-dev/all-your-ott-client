import React from 'react';
import { MdClose } from 'react-icons/md';

import calendarImg from '../styles/images/calendar.png';
import detailImg from '../styles/images/detail.png';
import text from '../styles/images/text.gif';
import graph1 from '../styles/images/graph.gif';
import graph2 from '../styles/images/graph2.gif';
import webmobileImg from '../styles/images/webmobile.png';

const Index = () => {
  return (
    <>
      <section>
        <div className={`container bg-index page-top`}>
          <h1 className={`page-top-title`}>ALL YOUR OTT</h1>
          당신의 OTT 서비스를 관리해보세요!
        </div>
      </section>
      <section className="bg-skyblue">
        <div className="container index-sub rowToColumn-reverse">
          <div className="cards">
            <div className={`card-small card-item watcha-mini`}>
              <button className="mini-del"></button>
              <div>
                <div className="item-name">WATCHA</div>
                <div className="item-body">
                  매월 30일, <br></br>
                  9900원이 결제됩니다.
                </div>
              </div>
            </div>
            <div className={`card-small card-item netflix-mini shake`}>
              <button className="mini-del">
                <MdClose />
              </button>
              <div>
                <div className="item-name">NETFLIX</div>
                <div className="item-body">
                  매월 23일, <br></br>
                  14900원이 결제됩니다.
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="title">Your Streamings</div>
            <div className="description">
              서비스를 등록, 삭제하여 관리 할 수 있습니다.
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container index-sub">
          <div className="info">
            <div className="title">Statistics</div>
            <div className="description">
              다양한 그래프로 통계를 보여드립니다.<br></br>
              리뷰를 바탕으로한 전체적인 서비스 통계와, 각 리뷰 별 개별 평가를
              그래프로 보여드립니다.
            </div>
          </div>
          <div className="cards rowToColumn">
            <img src={graph1} alt="calendar" className="img2" />
            <img src={text} alt="text" className="img2" />
            <img src={graph2} alt="list" className="img2" />
          </div>
        </div>
      </section>
      <section className="bg-grey">
        <div className="container index-sub">
          <div className="info">
            <div className="title">Your Reviews</div>
            <div className="description">
              TMDb에 등록된 영화와 TV 컨텐츠를 검색할 수 있습니다.
              <br></br>당연히 해당 컨텐츠를 리뷰로 등록할 수 있습니다.
              <br></br>
              리뷰를 달력형태로 한 눈에 볼 수 있습니다.<br></br>
              영화의 자세한 정보도 알 수 있습니다.
            </div>
          </div>
          <div className="cards rowToColumn">
            <img src={calendarImg} alt="calendar" className="img" />
            <img src={detailImg} alt="list" className="img3" />
          </div>
        </div>
      </section>
      <section className="bg-yellow">
        <div className="container-wide index-sub rowToColumn">
          <div className="info">
            <div className="title">Responsive Web</div>
            <div className="description">
              모바일에서도 편리하게 이용할 수 있습니다.
            </div>
          </div>
          <div className="cards">
            <img src={webmobileImg} alt="calendar" className="img3" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
