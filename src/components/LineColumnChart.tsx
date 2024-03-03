import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

const LineColumnChart = () => {
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
        data: [
          120000, 40000, 150000, 67000, 125000, 143000, 150000, 135300, 80000,
          40000, 125000, 30000,
        ],
      },
      {
        type: 'line',
        data: [
          100000, 120000, 110000, 80000, 50000, 60000, 90000, 93000, 103000,
          113000, 83000, 120000,
        ],
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
        endingShape: 'rounded', // 막대의 끝 모양을 둥글게
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
