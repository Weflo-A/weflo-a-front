import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

export interface AvgChartItem {
  month: number;
  totalAvgCost: number;
  groupAvgCost: number;
}
interface LineColumnChartProp {
  items?: AvgChartItem[];
}

const LineColumnChart = ({ items }: LineColumnChartProp) => {
  const totalAvgCostList = items?.map((item) => item.totalAvgCost) || [];
  const groupAvgCostList = items?.map((item) => item.groupAvgCost) || [];
  const options = {
    chart: {
      animations: {
        enabled: false,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: [colors.accent30, colors.accent100],
    series: [
      {
        type: 'column',
        data: totalAvgCostList,
      },
      {
        type: 'line',
        data: groupAvgCostList,
      },
    ],
    stroke: {
      width: [0, 4],
    },
    labels: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    markers: {
      size: 5,
      colors: colors.accent100,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '60%', // 막대의 너비
        borderRadius: 8,
      },
    },
    yaxis: {
      forceNiceScale: false,
      tickAmount: 5, // Y축에 표시할 레이블의 수
    },
    legend: {
      show: false,
    },
  };

  const minData =
    Math.min(...options.series[0].data) > Math.min(...options.series[1].data)
      ? Math.min(...options.series[1].data)
      : Math.min(...options.series[0].data);
  const maxData =
    Math.max(...options.series[0].data) > Math.max(...options.series[1].data)
      ? Math.max(...options.series[0].data)
      : Math.max(...options.series[1].data);

  return (
    <div style={{ width: '100%' }}>
      <ReactApexChart
        options={{
          ...options,
          yaxis: { ...options.yaxis, min: minData, max: maxData },
        }}
        series={options.series}
        height='241px'
      />
    </div>
  );
};

export default LineColumnChart;
