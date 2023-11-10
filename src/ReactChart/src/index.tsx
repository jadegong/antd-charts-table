/**
 * 此组件是图形组件入口，用于筛选到底调用哪一个chart组件;
 * 2023/11/10 gqd 增加组件;
 */
import React, { useEffect, useReducer, type FC } from 'react';

import { Empty } from 'antd';

import PieChart from './lib/PieChart';

const chartReducer = (state: any, action: any) => {
  const { type, props } = action;
  if (type === 'pie') {
    return <PieChart {...props} />;
  } else if (type === 'line') {
    return <PieChart {...props} />;
  } else {
    return <Empty />;
  }
};

const ReactChart: FC<{ type: string; option: any }> = (props) => {
  // props
  const [chart, dispatch] = useReducer(chartReducer, <></>);

  useEffect(() => {
    const {
      type,
      option: { data },
    } = props;
    if (!data || data.length === 0) {
      dispatch({});
    } else {
      dispatch({ type, props });
    }
  }, [props]);

  return (
    <div
      className="react-chart-wrapper"
      style={{ height: `${props.option.height - 25}px` }}
    >
      {chart}
    </div>
  );
};

export default ReactChart;
