/**
 * 基础表格
 */
import React, { useEffect, useState, type FC } from 'react';
import { toolUtil } from '../utils/toolUtils';

import { Table } from 'antd';

import './index.less';

/* interface BaseTablePropsOptionModel {
 *   showHeader: Boolean;
 *   columns: Array<any>;
 *   dataSource: Array<any>;
 *   pagination: Boolean;
 *   scroll: {
 *     x: Number | undefined,
 *     y: Number | undefined,
 *   };
 *   showLineNo: Boolean;
 *   onChange: Function;
 *   styleName: String;
 *   padding: Number;
 * }
 */

const BaseTable: FC<{ option: any }> = (props) => {
  // states
  const [defaultOptions, setDefaultOptions] = useState(
    Object({
      size: 'middle',
      showHeader: true,
      columns: [],
      dataSource: [],
      pagination: false,
      scroll: {
        x: undefined,
        y: 100,
      },
      showLineNo: true,
      onChange: () => {},
      styleName: 'striped',
      padding: 0,
    }),
  );

  // props
  const {
    option = {
      showHeader: true,
      columns: [],
      dataSource: [],
      pagination: false,
      scroll: {
        x: undefined,
        y: 100,
      },
      showLineNo: true,
      onChange: () => {},
      styleName: 'striped',
      padding: 0,
    },
  } = props;

  useEffect(() => {
    let retOpt: { [key: string]: any } = {
      size: 'middle',
      pagination: false,
    };
    toolUtil.merge(retOpt, option, true);
    if (retOpt.dataSource?.length > 0) {
      retOpt.dataSource.forEach((item: any, index: number) => {
        item.key = index;
      });
    }
    setDefaultOptions(retOpt);
  }, [option]);

  return (
    <Table
      className={`baseTable ${defaultOptions.styleName}`}
      showHeader={defaultOptions.showHeader}
      columns={defaultOptions.columns}
      dataSource={defaultOptions.dataSource}
      pagination={defaultOptions.pagination}
      scroll={defaultOptions.scroll}
      onChange={defaultOptions.onChange}
      style={{ height: '100%', padding: defaultOptions.padding }}
    />
  );
};
export default BaseTable;
