import { Stack, Typography } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';
import Chip from '../common/Chip';

interface TotalChartItems {
  part1Avg: number;
  part2Avg: number;
  part3Avg: number;
  part4Avg: number;
}

interface RadarChartProp {
  items: TotalChartItems | undefined;
  totalScore: number | undefined;
}
const ScoreRadarChart = ({ items, totalScore }: RadarChartProp) => {
  const avgList = [
    items?.part1Avg || 0,
    items?.part2Avg || 0,
    items?.part3Avg || 0,
    items?.part4Avg || 0,
  ];
  const options = {
    series: [
      {
        name: 'Total Score',
        data: avgList,
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

  return (
    <div
      style={{
        position: 'relative',
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
        position='absolute'
        bottom={30}
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
          text={`${totalScore}%`}
          style={{ border: `1px solid ${colors.accent100}`, fontSize: '14px' }}
        />
      </Stack>
    </div>
  );
};

export default ScoreRadarChart;
