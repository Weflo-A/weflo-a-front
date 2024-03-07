import { Stack, Typography } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';
import Chip from '../common/Chip';

const ScoreRadarChart = () => {
  const options = {
    series: [
      {
        name: 'Total Score',
        data: [80, 50, 30, 40],
      },
    ],
    padding: 0,
    colors: [colors.accent100],
    chart: {
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ['구동부 01', '구동부 02', '구동부 03', '구동부 04'],
    },
  };

  let sum = 0;

  options.series[0].data.forEach((num) => {
    sum += num;
  });

  const totalAvgScore = sum / 4;

  return (
    <div
      style={{
        maxWidth: 500,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ReactApexChart
        options={options}
        series={options.series}
        type='radar'
        width='300'
      />
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='center'
        gap='0.5rem'
      >
        <Typography fontSize='14px' fontWeight='bold' color={colors.basic700}>
          Total Score
        </Typography>
        <Chip
          color={colors.accent100}
          background={colors.accentOpacity20}
          text={`${totalAvgScore}%`}
          style={{ border: `1px solid ${colors.accent100}`, fontSize: '14px' }}
        />
      </Stack>
    </div>
  );
};

export default ScoreRadarChart;
