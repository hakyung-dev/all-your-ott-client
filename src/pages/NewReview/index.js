import React, { useState } from 'react';

import SectionSub from '../../components/SectionSub';
import Search from './Search';
import ReviewForm from './ReviewForm';
import NeedLogin from '../../components/NeedLogin';

const NewReview = (props) => {
  const { signInUser } = props;
  const [selectedContent, setSelectedContent] = useState(null);

  const handleChoice = (content) => {
    setSelectedContent({ ...content });
  };

  const searchBody = <Search handleChoice={handleChoice} />;

  const formBody = !signInUser ? (
    <NeedLogin
      description1={`리뷰를 작성하여 기록을 남길 수 있습니다.`}
      description2={`리뷰를 관리해보세요!`}
    />
  ) : (
    <ReviewForm
      {...props}
      selectedDate={props.location.state}
      selectedContent={selectedContent}
    />
  );

  return (
    <>
      <section>
        <div className={`container bg-new-review page-top`}>
          <h1 className={`page-top-title`}>New Review</h1>
          새로운 리뷰를 작성해보세요!
        </div>
      </section>
      <SectionSub
        color={`skyblue`}
        title={`Search`}
        description={`리뷰할 컨텐츠를 검색하세요.`}
        body={searchBody}
      />
      <SectionSub
        color={`grey`}
        title={`Add Review`}
        description={`리뷰를 완성하세요.`}
        body={formBody}
      />
    </>
  );
};

export default NewReview;
