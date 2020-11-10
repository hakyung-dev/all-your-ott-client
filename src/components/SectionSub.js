import React from 'react';

const SectionSub = (props) => {
  const {
    color = 'basic',
    layout = 'column',
    bg,
    title,
    description,
    body,
  } = props;

  return (
    <section className={`bg-${color}`}>
      <div className={`container-sub bg-${bg}`}>
        <div className="sub-top">
          <h2 className="title">{title}</h2>
          <div className="description">{description}</div>
        </div>
        <div className={`sub-body layout-${layout}`}>{body}</div>
      </div>
    </section>
  );
};

export default SectionSub;
