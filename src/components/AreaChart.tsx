import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

const AreaChart = () => {
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
        data: [45, 52, 38, 45, 19, 23, 2, 10, 40, 20, 12, 34],
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
