import { Typography } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';

interface MultiplePieChartProp {
  title: string;
  series: number[];
}
const MultiplePieChart = ({ title, series }: MultiplePieChartProp) => {
  const options = {
    series: [30, 40, 50],
    colors: [colors.accent30, colors.accent40, colors.accent50],
    plotOptions: {
      radialBar: {
        hollow: {
          size: '30%',
        },
        dataLabels: {
          name: {
            fontSize: '2rem',
            fontWeight: 700,
          },
          value: {
            fontSize: '1rem',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w: any) {
              return (
                (
                  w.globals.seriesTotals.reduce((a: any, b: any) => a + b, 0) /
                  w.globals.series.length
                )
                  .toFixed(0)
                  .toString() + '%'
              );
            },
          },
        },
      },
    },
    labels: ['Motor', 'Blade', 'ESC'],
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 200,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      }}
    >
      <ReactApexChart
        options={options}
        series={series}
        type='radialBar'
        width='200'
      />
      <Typography fontSize='11px' color={colors.basic400} textAlign='center'>
        {title}
      </Typography>
    </div>
  );
};

export default MultiplePieChart;
