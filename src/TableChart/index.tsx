/**
 * 2023/11/10 gqd 主要引用组件入口，在此组件内进行图和表切换，外部只需引用此组件即可;
 */
import React, { useEffect, useState, type FC } from 'react';
import { toolUtil } from '../utils/toolUtils';

import {
  BarChartOutlined,
  ExportOutlined,
  TableOutlined,
} from '@ant-design/icons';
import { Empty, Spin } from 'antd';
import ReactChart from 'antd-charts-table/ReactChart/src';
import BaseTable from '../BaseTable';

import './index.less';

const TableChart: FC<{ option: any }> = (props) => {
  // states
  // const [tableHeaderHeight, setTableHeaderHeight] = useState(50)
  const tableHeaderHeight = 50;
  const [showType, setShowType] = useState('chart');
  const [config, setConfig] = useState(Array<any>());
  const [baseChartOption, setBaseChartOption] = useState(Object({}));
  const [baseTableOption, setBaseTableOption] = useState(Object({}));
  // props
  const {
    option = {
      toolBar: false,
      onTypeChange: () => {},
      height: 600,
      padding: 0,
      type: '',
      columns: [],
      data: undefined,
      tableHeight: undefined,
      showLineNo: true,
      tableClassName: '',
      onTableChange: () => {},
      tableData: undefined,
      scrollX: undefined,
      loading: false,
      theme: 'light',
    },
  } = props;

  // functions
  /**
   * 切换统计图表显示类型事件
   * @param type String 切换后的显示类型；
   * @return null
   */
  const handleUIClick = (type: any) => {
    const { onTypeChange = () => {} } = option;
    if (type === 'export') {
      if (config[0].onExport && typeof config[0].onExport === 'function') {
        config[0].onExport();
      } else if (config[0].exportParams.url) {
        const { url, ...restParams } = config[0].exportParams;
        toolUtil.export(url, restParams);
      }
    } else {
      setShowType(type);
    }
    if (onTypeChange && typeof onTypeChange === 'function') {
      onTypeChange(type);
    }
  };

  // useEffect
  // baseChartOption
  useEffect(() => {
    let chartRet = toolUtil.extend(
      { height: 600, data: [], theme: 'light' },
      option,
    );
    setBaseChartOption(chartRet);
  }, [option]);
  // baseTableOption
  useEffect(() => {
    const {
      height,
      columns,
      data,
      tableHeight,
      showLineNo,
      tableClassName,
      onTableChange,
      tableData,
      scrollX,
      padding,
    } = option;
    let tableRet = {
      showHeader: true,
      columns,
      dataSource: tableData || data || [],
      pagination: false,
      scroll: {
        x: scrollX,
        y: tableHeight || height - tableHeaderHeight - 10,
      },
      showLineNo,
      onChange: onTableChange,
      styleName: tableClassName || 'striped',
      padding,
    };
    setBaseTableOption(tableRet);
  }, [option]);
  // set config
  useEffect(() => {
    const defaultToolBar = {
      displaySwitch: true,
      export: false,
      exportParams: {
        intfcType: '',
        intfcTypeName: '',
        fileName: '',
        url: '',
      },
    };
    const { toolBar } = option;
    let newToolBar: { [key: string]: any } = {};
    let bars: Array<any> = [];
    if (typeof toolBar === 'boolean') {
      if (toolBar) {
        newToolBar = defaultToolBar;
      } else {
        newToolBar = {};
      }
    } else if (typeof toolBar === 'object') {
      newToolBar = { ...defaultToolBar, ...toolBar };
    }
    if (newToolBar.displaySwitch) {
      bars = bars.concat([
        { id: 'chart', Component: <BarChartOutlined /> },
        {
          id: 'table',
          Component: <TableOutlined />,
        },
      ]);
    }
    if (newToolBar.export) {
      bars = bars.concat([
        {
          id: 'export',
          Component: <ExportOutlined />,
        },
      ]);
    }
    let ret = [newToolBar, bars.reverse()];
    setConfig(ret);
  }, [option]);

  return (
    <Spin spinning={option.loading}>
      <div className="table-chart-wrapper">
        {baseChartOption.data && baseChartOption.data.length === 0 ? (
          <div
            style={{
              position: 'relative',
              height: `${baseChartOption.height}px`,
            }}
          >
            <Empty />
          </div>
        ) : (
          <div className="table-chart-container">
            {config[1] && config[1].length > 0 ? (
              <div className="table-chart-operator-wrapper">
                {config[1].map((iconItem: any) => (
                  <span
                    key={iconItem.id}
                    className={`table-chart-toolbar-icon-wrapper${
                      iconItem.id === showType ? ' active' : ''
                    }`}
                    onClick={() => handleUIClick(iconItem.id)}
                  >
                    {iconItem.Component}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="table-chart-content-container">
              {showType === 'chart' ? (
                <ReactChart
                  type={baseChartOption.type}
                  option={baseChartOption}
                />
              ) : (
                <BaseTable option={baseTableOption} />
              )}
            </div>
          </div>
        )}
      </div>
    </Spin>
  );
};

export default TableChart;
