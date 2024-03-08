import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

interface DroneStateChart {
  items: { month: number; avgScore: number }[] | undefined;
}
const AreaChart = ({ items }: DroneStateChart) => {
  const avgScoreList = items?.map((item) => item.avgScore) || [];

  const options = {
    chart: {
      height: 250,
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
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: 'Series 1',
        data: avgScoreList,
      },
    ],
    colors: [colors.accent100],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    xaxis: {
      categories: [
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
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
    },
    markers: {
      size: 5,
      strokeWidth: 0,
      hover: {
        size: 9,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <ReactApexChart
        options={options}
        series={options.series}
        type='area'
        height='241px'
      />
    </div>
  );
};

export default AreaChart;
