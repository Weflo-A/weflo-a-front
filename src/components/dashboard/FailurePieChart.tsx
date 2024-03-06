import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ReactApexChart from 'react-apexcharts';
import colors from 'src/constants/colors';
import styled from 'styled-components';

const LabelSquare = styled.div<{ color: string }>`
  display: flex;
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  background-color: ${(props) => props.color};
`;

const FailurePieChart = () => {
  const options = {
    series: [45, 35, 15, 5],
    labels: ['Blade 고장', 'Motor 고장', 'ESC 고장', '조종기 고장'],
    plotOptions: {
      colors: [
        colors.accent100,
        colors.accentOpacity70,
        colors.accentOpacity40,
        colors.accentOpacity20,
      ],
      legend: {
        show: false,
      },
      pie: {
        donut: {
          size: '60%',
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: '0.75rem',
              fontWeight: 700,
              color: colors.basic700,
              offsetY: -5,
            },
            value: {
              show: true,
              fontSize: '1.125rem',
              fontWeight: 700,
              color: colors.basic700,
              offsetY: 0,
              formatter: function (val: string) {
                return val + '%'; // 밸류에 '%'를 추가합니다.
              },
            },
            totals: {
              show: true,
              showAlways: true,
              label: 'Blade 고장',
            },
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ReactApexChart
        options={options.plotOptions}
        series={options.series}
        type='donut'
        width='300'
      />
      <Stack direction='row' justifyContent='center' gap='0.5rem'>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <LabelSquare color={colors.accent100} />
          <Typography fontSize='12px' color={colors.basic600}>
            Blade 고장
          </Typography>
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <LabelSquare color={colors.accentOpacity70} />
          <Typography fontSize='12px' color={colors.basic600}>
            ESC 고장
          </Typography>
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <LabelSquare color={colors.accentOpacity40} />
          <Typography fontSize='12px' color={colors.basic600}>
            Motor 고장
          </Typography>
        </Stack>
        <Stack direction='column' justifyContent='center' alignItems='center'>
          <LabelSquare color={colors.accentOpacity20} />
          <Typography fontSize='11px' color={colors.basic600}>
            조종기 고장
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default FailurePieChart;
