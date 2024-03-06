import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

const TotalScoreChart = () => {
  const options = {
    series: [
      {
        name: 'Score',
        data: [34, 25, 68, 12],
      },
    ],
    chart: {
      height: 350,
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
    colors: [colors.accent100],
    plotOptions: {
      bar: {
        borderRadius: 8,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },

      fill: {
        type: 'solid',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val + '점';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: ['구동부 1', '구동부 2', '구동부 3', '구동부 4'],
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 4,
      labels: {
        formatter: function (val: number) {
          if (val === 25) {
            return '안전';
          } else if (val === 75) {
            return '위험';
          } else {
            return '';
          }
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 0,
          y2: 50, // 중간값이 50일 경우, 0부터 50까지 배경색을 적용
          fillColor: '#FBCFCC',
          opacity: 0.5,
        },
        {
          y: 50,
          y2: 100,
          fillColor: colors.primaryOpacity10,
          opacity: 0.5,
        },
      ],
    },
    tooltip: {
      enabled: false, // 툴팁을 비활성화
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <ReactApexChart
        options={options}
        series={options.series}
        type='bar'
        height='241px'
      />
    </div>
  );
};

export default TotalScoreChart;
