import React from 'react';
import { isSameMonth, subMonths } from 'date-fns';
import { MONTHS } from '../../constants/date';
import { Link } from 'react-router-dom';
import { setColorByService, groupBy, makeColorNumber } from '../../utils';

import ChartLine from '../../components/Charts/Line';
import ChartHorizontalBar from '../../components/Charts/HorizontalBar';
import ChartPie from '../../components/Charts/Pie';
import graphImg from '../../styles/images/graph.png';

const Graph = (props) => {
  const { review } = props;

  const today = new Date();
  const sixMonths = [];
  for (let i = 5; i >= 0; i--) {
    sixMonths.push(subMonths(today, i));
  }

  const monthLabel = sixMonths.map((month) => {
    return MONTHS[month.getMonth()];
  });

  const monthlyData = [];
  sixMonths.forEach((month) => {
    const inThisMonth = (data) => {
      return isSameMonth(new Date(data.date), month);
    };
    monthlyData.push(review.filter(inThisMonth));
  });

  const monthlyDataByStreaming = [];
  const streamSixMonth = new Set();
  monthlyData.forEach((monthly) => {
    if (monthly.length > 0) {
      monthly.forEach((review) => {
        streamSixMonth.add(review.service);
      });
    }
  });
  const streamArray = [...streamSixMonth];

  streamArray.forEach((stream, i) => {
    const count = [];
    const isSameService = (data) => {
      if (data.service === stream) {
        return true;
      }
      return false;
    };

    monthlyData.forEach((monthly) => {
      count.push(monthly.filter(isSameService).length);
    });

    monthlyDataByStreaming.push({
      label: stream,
      data: count,
      backgroundColor: setColorByService(stream),
    });
  });

  const total = [];
  const perOne = [];

  monthlyData.forEach((monthly) => {
    if (monthly.length === 0) {
      total.push(0);
      perOne.push(0);
    } else {
      const monthlyTotal = monthly.reduce((acc, cur) => acc + cur.rating, 0);
      total.push(monthlyTotal);
      perOne.push(Math.round(monthlyTotal / monthly.length));
    }
  });

  const monthlyRating = [
    {
      type: 'line',
      data: perOne,
      label: '평균 만족도',
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.8)',
      yAxisID: 'y-axis-2',
    },
    {
      type: 'bar',
      data: total,
      label: '총 만족도',
      fill: true,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.1)',
      yAxisID: 'y-axis-1',
    },
  ];

  const groupByService = groupBy(review, 'service');
  const serviceLabels = Object.keys(groupByService);
  const groupByType = groupBy(review, 'type');
  const typeLabels = Object.keys(groupByType);

  const serviceDataset = [];
  const serviceColor = [];
  const serviceBorder = [];
  serviceLabels.forEach((label) => {
    serviceDataset.push(groupByService[label].length);

    serviceColor.push(setColorByService(label, 0.2));
    serviceBorder.push(setColorByService(label));
  });
  const serviceData = [
    {
      data: serviceDataset,
      backgroundColor: serviceColor,
      borderColor: serviceBorder,
      borderWidth: 1,
    },
  ];

  const typeDataset = [];
  const typeColor = [];
  const typeBorder = [];
  typeLabels.forEach((label) => {
    typeDataset.push(groupByType[label].length);
    const c1 = makeColorNumber();
    const c2 = makeColorNumber();
    const c3 = makeColorNumber();
    typeColor.push(`rgba(${c1}, ${c2}, ${c3}, 0.2)`);
    typeBorder.push(`rgba(${c1}, ${c2}, ${c3}, 1)`);
  });

  const typeData = [
    {
      data: typeDataset,
      backgroundColor: typeColor,
      borderColor: typeBorder,
      borderWidth: 1,
    },
  ];

  const isReview = review.length ? (
    <>
      <ChartHorizontalBar
        label={monthLabel}
        dataset={monthlyDataByStreaming}
        title={`1. 6개월 이용량`}
        description={`그래프의 가로 길이는 지난 6개월의 전체 이용량을 나타내며 각 색상은 OTT별 이용량을 나타냅니다.`}
      />
      <ChartLine
        label={monthLabel}
        dataset={monthlyRating}
        title={`2. 6개월 만족도`}
        description={`지난 6개월 총 만족도를 나타냅니다. 본 사이트에서는 금액으로 별점을 나타냅니다. `}
      />
      <ChartPie
        label={[serviceLabels, typeLabels]}
        dataset={[serviceData, typeData]}
        title={`3. 총 이용비율`}
        description={`지금까지 이용한 서비스 비율과 컨텐츠 타입 비율을 나타냅니다.`}
      />
    </>
  ) : (
    <>
      <img src={graphImg} alt="graph" className="graph" />
      <div>리뷰를 등록하시면 자세한 통계를 볼 수 있습니다.</div>
      <Link to={`/review`} className="button link-basic">
        리뷰 작성하기
      </Link>
    </>
  );

  return <>{isReview}</>;
};

export default Graph;
