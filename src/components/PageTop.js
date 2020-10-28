import React from 'react';

const PageTop = (props) => {
  const { title, bg, color, subtitle } = props;

  const isSubtitle = subtitle ? (
    <div className="page-top-subtitle">{subtitle}</div>
  ) : (
    <></>
  );

  return (
    <section className={`bg-${color}`}>
      <div className={`container-wide bg-${bg} page-top`}>
        <h1 className={`page-top-title`}>{title}</h1>
        {isSubtitle}
      </div>
    </section>
  );
};

export default PageTop;
