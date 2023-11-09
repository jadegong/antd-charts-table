import React, { type FC, useEffect, useState, } from 'react'
import { toolUtil } from '../utils/toolUtils'

import {
  Spin,
} from 'antd'
import {
  ExportOutlined,
  BarChartOutlined,
  TableOutlined,
} from '@ant-design/icons'

const TableChart: FC<{option: any}> = (props) => {
  // states
  const [tableHeaderHeight, setTableHeaderHeight] = useState(50)
  const [showType, setShowType] = useState('chart')
  const [config, setConfig] = useState(Array<any>())
  const [baseChartOption, setBaseChartOption] = useState(Object({}))
  const [baseTableOption, setBaseTableOption] = useState(Object({}))
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
  } = props

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
    } = option
    let chartRet = toolUtil.extend({ height: 600, data: [], theme: 'light' }, option)
    let tableRet = {
      showHeader: true,
      columns,
      dataSource: tableData || data || [],
      pagination: false,
      scroll: {
        x: scrollX,
        y: tableHeight || height - tableHeaderHeight - 10
      },
      showLineNo,
      onChange: onTableChange,
      styleName: tableClassName || 'striped',
      padding,
    }
    setBaseChartOption(chartRet)
    setBaseTableOption(tableRet)
  }, [option])

  return (
    <Spin spinning={option.loading}>
    </Spin>
  )
}

export default TableChart
