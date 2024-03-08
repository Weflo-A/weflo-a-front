import { ApexOptions } from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

interface CostLineColumnChartProps {
  lineChartData: number[];
}

const CostLineColumnChart: React.FC<CostLineColumnChartProps> = ({
  lineChartData,
}) => {
  const cumulativeData = lineChartData.reduce((acc, val, index) => {
    if (index === 0) {
      acc.push(val);
    } else {
      acc.push(val + acc[index - 1]);
    }
    return acc;
  }, [] as number[]);

  const options: ApexOptions = {
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
        data: lineChartData,
      },
      {
        type: 'line',
        data: cumulativeData,
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
      },
    },
    yaxis: {
      forceNiceScale: false,
      tickAmount: 5, // Y축에 표시할 레이블의 수
      min: Math.min(...lineChartData, ...cumulativeData),
      max: Math.max(...lineChartData, ...cumulativeData),
    },
    legend: {
      show: false,
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <ReactApexChart
        options={options}
        series={options.series}
        type='line'
        height='241px'
      />
    </div>
  );
};

export default CostLineColumnChart;
