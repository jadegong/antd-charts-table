/**
 * 饼图组件;
 * 2023/11/10 gqd 增加组件;
 */
import * as echarts from 'echarts';
import React, { useEffect, useRef, type FC } from 'react';

import { toolUtil } from '../../../utils/toolUtils';
import { defaultConfig } from '../defaultConfig';
import { dark } from '../theme/dark';
import { light } from '../theme/light';

let pieChart: any = null;

const PieChart: FC<{ option: any }> = (props) => {
  // constants
  const defaultOption = toolUtil.extend({}, defaultConfig.pie.option);
  // states
  // ref
  const domChart = useRef(null);
  // props
  const { option = {} } = props;

  // functions
  const onWindowResize = () => {
    if (pieChart) {
      pieChart.resize();
    }
  };
  const setPieOption = (option: any) => {
    // const self = this;
    const opts = toolUtil.merge(defaultOption, option, true);
    const optionPie = {
      tooltip: {
        show: opts.showTooltip || false,
        formatter(params: any, ticket: any, callback: any) {
          return option.toolTipFormatter.call(this, params, ticket, callback);
        },
      },
      title: {
        text: opts.title,
        x: 'center',
        y: 10,
        /* textStyle: {
                      fontSize: 14,
                      color: '#fff'
                  } */
      },
      legend: {
        show: opts.legendShow,
        orient: opts.orient,
        left: opts.legendLeft,
        top: opts.legendTop,
        align: opts.legendAlign,
        itemHeight: 8,
        itemWidth: 8,
        // textStyle: {color: '#fff'},
        itemGap: 20,
        data: Array<any>(),
        // pageIconInactiveColor: '#2f4554',
        // pageIconColor: '#aaa',
        pageTextStyle: {
          // color: '#aaa',
        },
      },
      series: [
        {
          name: '数量占比',
          type: 'pie',
          center: opts.pieCenter,
          radius: opts.pieRadius,
          startAngle: 90,
          minAngle: 5,
          selectedMode: 'multiple',
          clockwise: true,
          itemStyle: {},
          roseType: opts.roseType === 'false' ? false : opts.roseType,
          avoidLabelOverlap: !opts.centerLabel,
          labelLine: {
            show: !opts.centerLabel,
          },
          label: {
            show: opts.labelShow,
            position: opts.centerLabel ? 'center' : 'outside',
            color: '#000',
            baseline: 'bottom',
            fontSize: opts.centerLabel ? 24 : 12,
            // fontWeight: opts.centerLabel ? 'bold' : 'normal',
            fontFamily: 'SimHei,Arial, Verdana, sans-serif',
            formatter(params: any) {
              if (opts.labelFormatter) {
                return opts.labelFormatter.call(this, params, toolUtil);
              }
              return `${params.name}:${toolUtil.commafy(params.value, 2)}(${
                params.percent
              }%)`;
            },
          },
          emphasis: {
            label: {
              show: opts.centerLabel,
              fontSize: opts.centerLabel ? 24 : 12,
              // fontWeight: opts.centerLabel ? 'bold' : 'normal',
            },
          },
          data: Array<any>(),
        },
      ],
    };

    const { data } = opts;
    if (data && data.length > 0) {
      if (!opts.rewriteOption) {
        optionPie.series[0].data = [];
        const result: Array<any> = [];
        const legendData: Array<any> = [];

        data.forEach((item: any, i: number) => {
          let select = false;

          if (i === 0) {
            select = true;
          }

          result.push({
            value: item[opts.valueName],
            name: item[opts.keyName],
            selected: select,
            itemStyle: {
              color: opts.colorList[i],
            },
          });
          legendData.push({ name: item[opts.keyName] });
        });

        optionPie.legend.data = legendData;
        optionPie.series[0].data = result;
        optionPie.series[0].name = opts.name;
      }
    } else {
      optionPie.series = [];
    }

    toolUtil.extend(optionPie, opts.optionPie);
    pieChart.setOption(optionPie, true);
  };

  // effect
  useEffect(() => {
    if (!pieChart) {
      // mounted,init echarts instance
      if (option) {
        pieChart = echarts.init(
          domChart.current,
          option.theme === 'dark' ? dark : light,
        );
      }
    } else {
      // updated
      pieChart.resize();
    }
    setPieOption(option);
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [option]);
  // unmounted
  useEffect(() => {
    return () => {
      if (pieChart) {
        pieChart.clear();
        pieChart.dispose();
      }
    };
  }, []);

  return (
    <div ref={domChart} style={{ height: '100%', width: '100%' }}>
      <span style={{ display: 'none' }}>{option.type}</span>
    </div>
  );
};

export default PieChart;
