/**
 * Created by gqd on 2023/11/10.
 */
import { theme } from '../../theme';

export const defaultConfig = {
  // theme:dark
  queryInput: {
    queryName: 'queryName',
    cnName: '输入框',
    validator: '',
    placeholder: '普通输入框，根据输入内容查询',
    type: 'queryInput',
  },
  querySelect: {
    queryName: 'selectName',
    cnName: '下拉框',
    validator: '',
    placeholder: '展开后可对选项进行搜索。',
    type: 'querySelect',
    dataType: 'ajax',
    mode: '-',
    clear: false,
    dataOption: {
      url: '/json/test.json',
      objName: 'chart2',
      method: 'get',
      keyName: 'key',
      valueName: 'value',
    },
    staticData: [
      {
        key: 1,
        value: 'test1',
      },
    ],
  },
  queryDate: {
    queryName: 'dateName',
    cnName: '日期选择',
    validator: '',
    placeholder: '选择日期，单选天',
    type: 'queryDate-date',
  },
  // 时间段默认配置
  queryDateRange: {
    queryName: 'dateRangeName',
    queryParam: ['startTime', 'endTime'],
    cnName: '日期段选择',
    format: ['YYYY/MM/DD', 'gggg第wo', 'YYYY/MM'],
    defaultTime: null,
    validator: '',
    placeholder: ['开始日期', '结束日期'],
    type: 'queryDateRange-date',
  },
  pageSetting: {
    col: 48,
    pageZoom: 'fullPage',
    margin: '[10, 10, 10, 10]',
    avatar:
      'https://echarts.baidu.com/examples/data/thumb/scatter-life-expectancy-timeline.png',
    pageWidth: 'auto',
    pageHeight: 'auto',
  },
  industrySelect: {
    queryName: 'queryName',
    type: 'industrySelect',
  },

  // theme:light

  line: {
    option: {
      theme: 'light',
      type: 'line',
      data: [], // 图表数据
      title: '', // 图表名称
      name: '折线图', // 线名称
      keyName: 'key', // 数据展现坐标KEY名称
      valueName: 'value', // 数据展现值
      gridLeft: '10%', // grid 组件离容器左侧的距离
      gridRight: '10%', // grid 组件离容器右侧的距离
      gridTop: '20%', // grid 组件离容器上侧的距离
      gridBottom: '20%', // grid 组件离容器下侧的距离
      yAxisName: 'Y轴坐标', // y轴名称
      xRotate: 0, // x轴标签旋转角度
      xAxisLabelColor: theme['chart-axisLine'], // x轴标签颜色
      yRotate: 0, // y轴标签旋转角度
      yAxisLabelColor: theme['chart-axisLine'], // y轴标签颜色
      nameTextColor: theme['chart-label'], // y轴名称颜色
      color: '', // 折线颜色
      symbolSize: 6,
      optionLine: {},
      isAreaStyle: true, // 是否为堆积面积图
      colorStops: [
        {
          offset: 0,
          color: 'rgba(39,169,244,1)',
        },
        {
          offset: 0.5,
          color: 'rgba(39,169,244,0.6)',
        },
        {
          offset: 1,
          color: 'rgba(39,169,244,0.4)',
        },
      ],
      resetOrder: true, // 设置是否对数据重排序
      showDataZoom: false,
      lastDotted: false,
      toolTipFormatter: null,
      legendFormatter: null,
      xAxisFormatter: null,
      yAxisFormatter: null,
      smooth: true,
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'chart1',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  lines: {
    option: {
      theme: 'light',
      type: 'lines',
      data: [], // 图表数据
      title: '', // 图表名称
      name: '多折线图', // 线名称
      keyName: 'key', // 数据展现坐标KEY名称
      valueName: 'value', // 数据展现值
      gridLeft: '10%', // grid 组件离容器左侧的距离
      gridRight: '10%', // grid 组件离容器右侧的距离
      gridTop: '20%', // grid 组件离容器上侧的距离
      gridBottom: '20%', // grid 组件离容器下侧的距离
      legendShow: true, // 是否显示legend
      orient: 'horizontal', // 图例布局朝向
      legendLeft: 'center', // 图例组件离容器左侧的距离
      legendTop: '30px', // 图例组件离容器上侧的距离
      xRotate: 0, // x轴标签旋转角度
      xAxisLabelColor: theme['chart-label'], // x轴标签颜色
      y1Rotate: 0, // y1轴标签旋转角度
      y1AxisName: 'Y1轴', // y1轴名称
      y1AxisLabelColor: theme['chart-label'], // y1轴标签颜色
      y2Rotate: 0, // y2轴标签旋转角度
      y2AxisName: 'Y2轴', // y2轴名称
      y2AxisLabelColor: theme['chart-label'], // y2轴标签颜色
      names: ['用户总数', '新增用户数'],
      keys: ['key1Value', 'key2Value'],
      y1Keys: [],
      y2Keys: [],
      isAreaStyle: false,
      colorList: [
        '#478ff7',
        '#ff7f4c',
        '#7fa7b8',
        '#f1485b',
        '#26cdcb',
        '#7565c7',
        '#27a9f4',
        '#778efe',
        '#4ccb70',
        '#ffca3a',
      ],
      optionLines: {},
      enableDoubleYAxis: false, // 是否启用双y轴
      resetOrder: true, // 设置是否对数据重排序
      symbolSize: 6,
      showDataZoom: false,
      lastDotted: false,
      toolTipFormatter: null,
      legendFormatter: null,
      xAxisFormatter: null,
      yAxisFormatter: null,
      smooth: true,
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'linesChart',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  bar: {
    option: {
      theme: 'light',
      type: 'bar',
      keyName: 'key',
      valueName: ['value', 'value1'],
      barType: 'horizontal',
      title: '物联卡总体发展趋势',
      name: ['用户数', '总用户数'],
      barColor: ['#60AAFF', '#7687A1'],
      colorList: ['#60AAFF'],
      gridLeft: '10%',
      gridRight: '10%',
      gridTop: '20%',
      gridBottom: '20%',
      legendShow: true,
      xAxisLabelColor: theme['chart-label'],
      yAxisLabelColor: theme['chart-label'],
      orient: 'horizontal',
      legendLeft: 'center',
      legendTop: '30px',
      optionBar: {},
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'barChart',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  pie: {
    option: {
      theme: 'light',
      type: 'pie',
      title: '',
      keyName: 'key',
      valueName: 'value',
      orient: 'vertical',
      legendAlign: 'left',
      legendLeft: 'right',
      legendTop: 'center',
      showTooltip: false, // 2022/01/14 gqd
      // colorList: ["#478ff7", "#d1476b", "#7565c7", "#6cc6c7", "#f87466", "#ffca3a", "#4ccb70", "#34bbff", "#778efe", "#7fa7b8"],
      colorList: [
        '#f25118',
        '#f4db4e',
        '#32bbe0',
        '#a5ec7f',
        '#4d7fff',
        '#f95d60',
        '#f4ac4e',
        '#a179f1',
        '#f1598d',
        '#0080d9',
        '#d05757',
        '#83d540',
        '#f46d9b',
        '#346ef9',
        '#ffdf33',
        '#84adff',
        '#ff8484',
        '#3cb371',
      ],
      optionPie: {},
      legendShow: true,
      centerLabel: false, // 是否在圆环中心动态展示label信息
      pieCenter: ['48%', '50%'],
      pieRadius: ['30%', '50%'],
      roseType: 'false',
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'pieChart',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  barLine: {
    option: {
      theme: 'light',
      type: 'barLine',
      keyName: 'key',
      barValueName: ['value', 'value2'],
      lineValueName: ['value1'],
      barName: ['总用户数', '停机用户数'],
      lineName: ['活跃用户数'],
      barColor: ['#60AAFF', '#7687A1'],
      lineColor: ['#fac22b'],
      // colorList: ["#f6ca3f", "#32bbe0", "#a974ff", "#fffd5c", "#04dcb1", "#ff8023", "#92d362", "#92aeff", "#ff8a92", "#ff502e"],
      title: '',
      legendAlign: 'left',
      optionBarLine: {},
      gridLeft: '10%',
      gridRight: '10%',
      gridTop: '20%',
      gridBottom: '20%',
      legendShow: true,
      overlap: false,
      hideMarkPoint: false,
      xAxisLabelColor: theme['chart-label'],
      xRotate: 0,
      orient: 'horizontal',
      legendLeft: 'center',
      legendTop: '30px',
      y1AxisName: '',
      y2AxisName: '',
      y1AxisLabelColor: theme['chart-label'],
      y2AxisLabelColor: theme['chart-label'],
      y1Rotate: 0,
      y2Rotate: 0,
      showY2Axis: true,
      showYAxisName: true,
      splitYAxis: false,
      smooth: true,
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'barLineChart',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  pieBar: {
    option: {
      theme: 'light',
      type: 'pieBar',
      keyName: 'key',
      valueName: ['value', 'value1'],
      barType: 'horizontal',
      title: '物联卡总体发展趋势',
      name: ['用户数', '总用户数'],
      barColor: ['#60AAFF', '#7687A1'],
      colorList: ['#60AAFF'],
      gridLeft: '30%',
      gridRight: '10%',
      gridTop: '20%',
      gridBottom: '20%',
      legendShow: true,
      xAxisLabelColor: theme['chart-label'],
      yAxisLabelColor: theme['chart-label'],
      orient: 'horizontal',
      legendLeft: 'center',
      legendTop: '30px',
      optionBar: {},
      pieCenter: ['15%', '50%'],
      pieRadius: '30%',
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'barChart',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  pieLines: {
    option: {
      theme: 'light',
      type: 'pieLines',
      data: [], // 图表数据
      title: '', // 图表名称
      name: '多折线图', // 线名称
      keyName: 'key', // 数据展现坐标KEY名称
      valueName: 'value', // 数据展现值
      gridLeft: '30%', // grid 组件离容器左侧的距离
      gridRight: '10%', // grid 组件离容器右侧的距离
      gridTop: '20%', // grid 组件离容器上侧的距离
      gridBottom: '20%', // grid 组件离容器下侧的距离
      legendShow: true, // 是否显示legend
      orient: 'horizontal', // 图例布局朝向
      legendLeft: 'center', // 图例组件离容器左侧的距离
      legendTop: '30px', // 图例组件离容器上侧的距离
      xRotate: 0, // x轴标签旋转角度
      xAxisLabelColor: theme['chart-label'], // x轴标签颜色
      y1Rotate: 0, // y1轴标签旋转角度
      y1AxisName: 'Y1轴', // y1轴名称
      y1AxisLabelColor: theme['chart-label'], // y1轴标签颜色
      y2Rotate: 0, // y2轴标签旋转角度
      y2AxisName: 'Y2轴', // y2轴名称
      y2AxisLabelColor: theme['chart-label'], // y2轴标签颜色
      names: ['用户总数', '新增用户数'],
      keys: ['key1Value', 'key2Value'],
      y1Keys: [],
      y2Keys: [],
      isAreaStyle: false,
      colorList: [
        '#478ff7',
        '#ff7f4c',
        '#7fa7b8',
        '#f1485b',
        '#26cdcb',
        '#7565c7',
        '#27a9f4',
        '#778efe',
        '#4ccb70',
        '#ffca3a',
      ],
      optionPieLines: {},
      enableDoubleYAxis: false, // 是否启用双y轴
      resetOrder: true, // 设置是否对数据重排序
      symbolSize: 6,
      showDataZoom: false,
      lastDotted: false,
      toolTipFormatter: null,
      legendFormatter: null,
      xAxisFormatter: null,
      yAxisFormatter: null,
      smooth: true,
      pieCenter: ['15%', '50%'],
      pieRadius: '30%',
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'linesChart',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  radar: {
    option: {
      theme: 'light',
      type: 'radar',
      title: '模型雷达评分图',
      dimensionKey: ['value1', 'value2', 'value3', 'value4', 'value5'],
      dimensionName: [
        '用户发展情况',
        '收入情况',
        '流量使用',
        '套餐量发展',
        '活跃度情况',
      ],
      max: [100, 100, 100, 100, 100],
      lineColor: ['#27a9f4', '#4ccb70'],
      legendShow: true,
      orient: 'vertical',
      legendLeft: 'right',
      legendTop: 'center',
      legendAlign: 'left',
      name: ['客户1', '客户2'],
      center: ['50%', '60%'],
      radius: ['0%', '70%'],
      shape: 'polygon',
      splitAreaShow: true,
      splitAreaColor: ['transparent'],
      splitLineShow: true,
      splitLineColor: ['#0394e7'],
      fillingStyle: true,
      fillingStyleColor: ['#3D91F7', '#61BE67'],
      optionRadar: {},
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'radarChart',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  threeBar: {
    option: {
      theme: 'light',
      type: 'threeBar',
      title: '3D柱图',
      keyName: 'provincename',
      valueName: 'totalcnt',
      keyPosition: 'bottom', // 标签位置(只针对key对应的标签),top || bottom
      dataLength: 5, // 柱体个数
      barSize: 1.2, // 柱体的大小(长宽)
      barHeight: [9, 7, 5, 3, 1], // 每个柱体对应的高度(PS:高度差距不能过大)
      rotate: 0, // 底部标签旋转角度
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'threeBarChart',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  threeBar2: {
    option: {
      theme: 'light',
      type: 'threeBar2',
      title: '3D柱图2',
      keyName: 'provincename',
      valueName: 'totalcnt',
      dataLength: 5, // 柱体个数
      barSize: 1.2, // 柱体的大小(长宽)
      barHeight: [9, 7, 5, 3, 1], // 每个柱体对应的高度(PS:高度差距不能过大)
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'threeBarChart',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  threeBar3: {
    option: {
      theme: 'light',
      type: 'threeBar3',
      title: '3D柱图3',
      keyName: 'provincename',
      valueName: 'totalcnt',
      dataLength: 5, // 柱体个数
      barSize: 1.2, // 柱体的大小(长宽)
      barHeight: [9, 7, 5, 3, 1], // 每个柱体对应的高度(PS:高度差距不能过大)
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'threeBarChart',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  particles: {
    option: {
      theme: 'light',
      type: 'particles',
      title: 'particles',
      keyName: 'month_id',
      valueName: 'api_cnt',
      lineColor: 'rgba(221,31,103,0.6)',
      xAxisLabelColor: theme['chart-label'],
      yAxisLabelColor: theme['chart-label'],
      yAxisName: 'Y轴',
      gridLeft: '10%',
      gridRight: '10%',
      gridTop: '20%',
      gridBottom: '20%',
      name: ['API调用量'],
      dataUnit: 'COUNT_BILLION_DISUNITY',
      unit: '',
      legendShow: true,
      orient: 'horizontal',
      legendLeft: 'center',
      legendTop: '30px',
      circleSize: 45,
      barSize: '20%',
      dataLength: 6,
      style: 'style1',
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'particlesChart',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  map: {
    option: {
      theme: 'light',
      type: 'map',
      title: '地图',
      selectName: '全国',
    },
    dataOption: {
      url: '/json/data/ggsnPoit.json',
      objName: 'provinceUsedCnt',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  bar3D: {
    option: {
      type: 'bar3D',
      title: 'Bar3D - Punch Card',
      name: '测试seriesName',
      hours: [
        '12a',
        '1a',
        '2a',
        '3a',
        '4a',
        '5a',
        '6a',
        '7a',
        '8a',
        '9a',
        '10a',
        '11a',
        '12p',
        '1p',
        '2p',
        '3p',
        '4p',
        '5p',
        '6p',
        '7p',
        '8p',
        '9p',
        '10p',
        '11p',
      ],
      days: [
        'Saturday',
        'Friday',
        'Thursday',
        'Wednesday',
        'Tuesday',
        'Monday',
        'Sunday',
      ],
      data: [
        [0, 0, 5],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 0],
        [0, 4, 0],
        [0, 5, 0],
        [0, 6, 0],
        [0, 7, 0],
        [0, 8, 0],
        [0, 9, 0],
        [0, 10, 0],
        [0, 11, 2],
        [0, 12, 4],
        [0, 13, 1],
        [0, 14, 1],
        [0, 15, 3],
        [0, 16, 4],
        [0, 17, 6],
        [0, 18, 4],
        [0, 19, 4],
        [0, 20, 3],
        [0, 21, 3],
        [0, 22, 2],
        [0, 23, 5],
        [1, 0, 7],
        [1, 1, 0],
        [1, 2, 0],
        [1, 3, 0],
        [1, 4, 0],
        [1, 5, 0],
        [1, 6, 0],
        [1, 7, 0],
        [1, 8, 0],
        [1, 9, 0],
        [1, 10, 5],
        [1, 11, 2],
        [1, 12, 2],
        [1, 13, 6],
        [1, 14, 9],
        [1, 15, 11],
        [1, 16, 6],
        [1, 17, 7],
        [1, 18, 8],
        [1, 19, 12],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 7],
        [1, 23, 2],
        [2, 0, 1],
        [2, 1, 1],
        [2, 2, 0],
        [2, 3, 0],
        [2, 4, 0],
        [2, 5, 0],
        [2, 6, 0],
        [2, 7, 0],
        [2, 8, 0],
        [2, 9, 0],
        [2, 10, 3],
        [2, 11, 2],
        [2, 12, 1],
        [2, 13, 9],
        [2, 14, 8],
        [2, 15, 10],
        [2, 16, 6],
        [2, 17, 5],
        [2, 18, 5],
        [2, 19, 5],
        [2, 20, 7],
        [2, 21, 4],
        [2, 22, 2],
        [2, 23, 4],
        [3, 0, 7],
        [3, 1, 3],
        [3, 2, 0],
        [3, 3, 0],
        [3, 4, 0],
        [3, 5, 0],
        [3, 6, 0],
        [3, 7, 0],
        [3, 8, 1],
        [3, 9, 0],
        [3, 10, 5],
        [3, 11, 4],
        [3, 12, 7],
        [3, 13, 14],
        [3, 14, 13],
        [3, 15, 12],
        [3, 16, 9],
        [3, 17, 5],
        [3, 18, 5],
        [3, 19, 10],
        [3, 20, 6],
        [3, 21, 4],
        [3, 22, 4],
        [3, 23, 1],
        [4, 0, 1],
        [4, 1, 3],
        [4, 2, 0],
        [4, 3, 0],
        [4, 4, 0],
        [4, 5, 1],
        [4, 6, 0],
        [4, 7, 0],
        [4, 8, 0],
        [4, 9, 2],
        [4, 10, 4],
        [4, 11, 4],
        [4, 12, 2],
        [4, 13, 4],
        [4, 14, 4],
        [4, 15, 14],
        [4, 16, 12],
        [4, 17, 1],
        [4, 18, 8],
        [4, 19, 5],
        [4, 20, 3],
        [4, 21, 7],
        [4, 22, 3],
        [4, 23, 0],
        [5, 0, 2],
        [5, 1, 1],
        [5, 2, 0],
        [5, 3, 3],
        [5, 4, 0],
        [5, 5, 0],
        [5, 6, 0],
        [5, 7, 0],
        [5, 8, 2],
        [5, 9, 0],
        [5, 10, 4],
        [5, 11, 1],
        [5, 12, 5],
        [5, 13, 10],
        [5, 14, 5],
        [5, 15, 7],
        [5, 16, 11],
        [5, 17, 6],
        [5, 18, 0],
        [5, 19, 5],
        [5, 20, 3],
        [5, 21, 4],
        [5, 22, 2],
        [5, 23, 0],
        [6, 0, 1],
        [6, 1, 0],
        [6, 2, 0],
        [6, 3, 0],
        [6, 4, 0],
        [6, 5, 0],
        [6, 6, 0],
        [6, 7, 0],
        [6, 8, 0],
        [6, 9, 0],
        [6, 10, 1],
        [6, 11, 0],
        [6, 12, 2],
        [6, 13, 1],
        [6, 14, 3],
        [6, 15, 4],
        [6, 16, 0],
        [6, 17, 0],
        [6, 18, 0],
        [6, 19, 0],
        [6, 20, 1],
        [6, 21, 2],
        [6, 22, 2],
        [6, 23, 6],
      ],
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'bar3D',
      method: 'get',
      data: [],
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  tabLines: {
    option: {
      theme: 'light',
      type: 'tabLines',
      keyName: 'key',
      valueName: 'value',
      title: '{time}{province}{tab}',
      name: '用户数',
      y1Keys: ['key1Value', 'key2Value', 'key3Value'],
      y2Keys: ['key4Value'],
      names: ['用户总数', '新增用户数', '活跃用户数', '活跃度'],
      keys: ['key1Value', 'key2Value', 'key3Value', 'key4Value'],
      y1AxisName: '用户数',
      y2AxisName: '活跃度',
      xAxisLabelColor: theme['chart-label'],
      y1AxisLabelColor: theme['chart-label'],
      y2AxisLabelColor: theme['chart-label'],
      y2AxisFormatter: "(function(value){return (value * 100 + '%')})",
      y1Rotate: 0,
      y2Rotate: 0,
      legendShow: true,
      orient: 'horizontal',
      gridLeft: '10%',
      gridRight: '10%',
      gridTop: '25%',
      gridBottom: '15%',
      legendLeft: 'center',
      legendTop: '30px',
      colorList: [
        '#478ff7',
        '#ff7f4c',
        '#7fa7b8',
        '#f1485b',
        '#26cdcb',
        '#7565c7',
        '#27a9f4',
        '#778efe',
        '#4ccb70',
        '#ffca3a',
      ],
      enableDoubleYAxis: true,
      optionLines: {},
      tabs: [
        {
          id: 'highRisk',
          name: '高风险',
          objName: 'tabLines1',
          url: '/json/test1.json',
          method: 'get',
        },
        {
          id: 'middleRisk',
          name: '中风险',
          objName: 'tabLines2',
          url: '/json/test.json',
          method: 'get',
        },
        {
          id: 'lowRisk',
          name: '低风险',
          objName: 'tabLines3',
          url: '/json/test.json',
          method: 'get',
        },
        {
          id: 'safe',
          name: '安全',
          objName: 'tabLines4',
          url: '/json/test.json',
          method: 'get',
        },
      ],
    },
    dataOption: [
      {
        id: 'highRisk',
        url: '/json/test1.json',
        objName: 'tabLines1',
        method: 'get',
        data: [],
      },
      {
        id: 'middleRisk',
        url: '/json/test.json',
        objName: 'tabLines2',
        method: 'get',
        data: [],
      },
      {
        id: 'lowRisk',
        url: '/json/test.json',
        objName: 'tabLines3',
        method: 'get',
        data: [],
      },
      {
        id: 'safe',
        url: '/json/test.json',
        objName: 'tabLines4',
        method: 'get',
        data: [],
      },
    ],
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  tabBar: {
    option: {
      theme: 'light',
      type: 'tabBar',
      keyName: 'key',
      valueName: ['key1Value', 'key2Value', 'key3Value', 'key4Value'],
      barType: 'horizontal',
      title: '{time}{province}{tab}',
      name: ['用户总数', '新增用户数', '活跃用户数', '活跃度'],
      barColor: ['#27a9f4', '#4ccb70'],
      colorList: ['#27a9f4'],
      gridLeft: '10%',
      gridRight: '10%',
      gridTop: '20%',
      gridBottom: '20%',
      legendShow: true,
      xAxisLabelColor: theme['chart-label'],
      yAxisLabelColor: theme['chart-label'],
      orient: 'horizontal',
      legendLeft: 'center',
      legendTop: '20px',
      optionBar: {},
      tabs: [
        {
          id: 'highRisk',
          name: '高风险',
          objName: 'tabBar1',
          url: '/json/test1.json',
          method: 'get',
        },
        {
          id: 'middleRisk',
          name: '中风险',
          objName: 'tabBar2',
          url: '/json/test.json',
          method: 'get',
        },
        {
          id: 'lowRisk',
          name: '低风险',
          objName: 'tabBar3',
          url: '/json/test.json',
          method: 'get',
        },
        {
          id: 'safe',
          name: '安全',
          objName: 'tabBar4',
          url: '/json/test.json',
          method: 'get',
        },
      ],
    },
    dataOption: [
      {
        id: 'highRisk',
        url: '/json/test1.json',
        objName: 'tabBar1',
        method: 'get',
        data: [],
      },
      {
        id: 'middleRisk',
        url: '/json/test.json',
        objName: 'tabBar2',
        method: 'get',
        data: [],
      },
      {
        id: 'lowRisk',
        url: '/json/test.json',
        objName: 'tabBar3',
        method: 'get',
        data: [],
      },
      {
        id: 'safe',
        url: '/json/test.json',
        objName: 'tabBar4',
        method: 'get',
        data: [],
      },
    ],
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  customCard: {
    option: {},
    dataOption: {},
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  table: {
    option: {},
    dataOption: {
      url: '/json/test.json',
      objName: 'chart1',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  riskOverviewCeil: {
    option: {
      type: 'riskOverviewCeil',
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'chart1',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 12,
  },
  blackListTable: {
    option: {
      type: 'blackList',
    },
    dataOption: {
      url: '/json/test.json',
      objName: 'chart1',
      method: 'get',
      data: [],
      params: {
        intfcType: 'baseProvince',
        intfcTypeName: '测试intfcTypeName',
      },
    },
    exportOption: {
      property: [
        {
          exportName: '{dateName} {tab}',
          exportRiskType: '',
          exportAddress: 'riskPlatform/exportJson',
          exportParams: '',
        },
      ],
      exportPermission: true,
    },
    customizeOption: [
      {
        index: 1,
        customizeType: 'upload',
        customizeIcon: 'download',
        customizeDisable: '(()=>false)()',
        buttonConfig: {
          url: '',
          params: {
            searchParam: false,
            selectParam: false,
            configParam: [
              {
                key: 'key',
                value: 'value',
              },
            ],
          },
          fileType: '',
          fileSize: '100',
        },
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 24,
    h: 24,
  },
  tabCard: {
    tabs: [
      {
        id: '1',
        name: 'tab1',
        cardOption: [
          {
            option: {
              theme: 'light',
              type: 'lines',
              data: [], // 图表数据
              title: '', // 图表名称
              name: '多折线图', // 线名称
              keyName: 'key', // 数据展现坐标KEY名称
              valueName: 'value', // 数据展现值
              gridLeft: '10%', // grid 组件离容器左侧的距离
              gridRight: '10%', // grid 组件离容器右侧的距离
              gridTop: '20%', // grid 组件离容器上侧的距离
              gridBottom: '20%', // grid 组件离容器下侧的距离
              legendShow: true, // 是否显示legend
              orient: 'horizontal', // 图例布局朝向
              legendLeft: 'center', // 图例组件离容器左侧的距离
              legendTop: '20px', // 图例组件离容器上侧的距离
              xRotate: 0, // x轴标签旋转角度
              xAxisLabelColor: theme['chart-label'], // x轴标签颜色
              y1Rotate: 0, // y1轴标签旋转角度
              y1AxisName: 'Y1轴', // y1轴名称
              y1AxisLabelColor: theme['chart-label'], // y1轴标签颜色
              y2Rotate: 0, // y2轴标签旋转角度
              y2AxisName: 'Y2轴', // y2轴名称
              y2AxisLabelColor: theme['chart-label'], // y2轴标签颜色
              names: ['用户总数', '新增用户数'],
              keys: ['key1Value', 'key2Value'],
              y1Keys: [],
              y2Keys: [],
              isAreaStyle: false,
              colorList: [
                '#478ff7',
                '#ff7f4c',
                '#7fa7b8',
                '#f1485b',
                '#26cdcb',
                '#7565c7',
                '#27a9f4',
                '#778efe',
                '#4ccb70',
                '#ffca3a',
              ],
              optionLines: {},
              enableDoubleYAxis: false, // 是否启用双y轴
              resetOrder: true, // 设置是否对数据重排序
              symbolSize: 6,
              showDataZoom: false,
              lastDotted: false,
              toolTipFormatter: null,
              legendFormatter: null,
              xAxisFormatter: null,
              yAxisFormatter: null,
            },
            dataOption: {
              url: '/json/test.json',
              objName: 'linesChart',
              method: 'get',
              data: [],
              params: {
                intfcType: 'baseProvince',
                intfcTypeName: '测试intfcTypeName',
              },
            },
            exportOption: {
              property: [
                {
                  exportName: '{dateName} {tab}',
                  exportRiskType: '',
                  exportAddress: 'riskPlatform/exportJson',
                  exportParams: '',
                },
              ],
              exportPermission: true,
            },
            customizeOption: [
              {
                index: 1,
                customizeType: 'upload',
                customizeIcon: 'download',
                customizeDisable: '(()=>false)()',
                buttonConfig: {
                  url: '',
                  params: {
                    searchParam: false,
                    selectParam: false,
                    configParam: [
                      {
                        key: 'key',
                        value: 'value',
                      },
                    ],
                  },
                  fileType: '',
                  fileSize: '100',
                },
              },
            ],
            GridX: 0,
            GridY: 0,
            w: 24,
            h: 24,
            key: 'tab11',
          },
        ],
      },
      {
        id: '2',
        name: 'tab2',
        cardOption: [
          {
            option: {
              theme: 'light',
              type: 'bar',
              keyName: 'key',
              valueName: ['value', 'value1'],
              barType: 'horizontal',
              title: '物联卡总体发展趋势',
              name: ['用户数', '总用户数'],
              barColor: ['#27a9f4', '#4ccb70'],
              colorList: ['#27a9f4'],
              gridLeft: '10%',
              gridRight: '10%',
              gridTop: '20%',
              gridBottom: '20%',
              legendShow: true,
              xAxisLabelColor: theme['chart-label'],
              yAxisLabelColor: theme['chart-label'],
              orient: 'horizontal',
              legendLeft: 'center',
              legendTop: '20px',
              optionBar: {},
            },
            dataOption: {
              url: '/json/test.json',
              objName: 'barChart',
              method: 'get',
              data: [],
              params: {
                intfcType: 'baseProvince',
                intfcTypeName: '测试intfcTypeName',
              },
            },
            exportOption: {
              property: [
                {
                  exportName: '{dateName} {tab}',
                  exportRiskType: '',
                  exportAddress: 'riskPlatform/exportJson',
                  exportParams: '',
                },
              ],
              exportPermission: true,
            },
            customizeOption: [
              {
                index: 1,
                customizeType: 'upload',
                customizeIcon: 'download',
                customizeDisable: '(()=>false)()',
                buttonConfig: {
                  url: '',
                  params: {
                    searchParam: false,
                    selectParam: false,
                    configParam: [
                      {
                        key: 'key',
                        value: 'value',
                      },
                    ],
                  },
                  fileType: '',
                  fileSize: '100',
                },
              },
            ],
            GridX: 0,
            GridY: 0,
            w: 24,
            h: 24,
            key: 'tab21',
          },
        ],
      },
    ],
    GridX: 0,
    GridY: 0,
    w: 48,
    h: 24,
  },
  treeMap: {
    option: {
      data: null,
      title: '',
      keyName: '',
      valueName: '',
      colorList: [
        '#f25118',
        '#32bbe0',
        '#4d7fff',
        '#f95d60',
        '#f4ac4e',
        '#a179f1',
        '#f1598d',
        '#0080d9',
        '#d05757',
        '#83d540',
        '#f46d9b',
        '#346ef9',
        '#ffdf33',
        '#84adff',
        '#ff8484',
        '#3cb371',
      ],
    },
  },
};
