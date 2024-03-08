import React from 'react';
import { Chart } from 'react-chartjs-2';
import colors from 'src/constants/colors';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
  registerables,
} from 'chart.js';
import styled from 'styled-components';

ChartJS.register(
  ...registerables,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ArcElement
);

interface TimeLine {
  date: string;
  motorPoint: number;
  bladePoint: number;
  escPoint: number;
}

const MixChart: React.FC<{ timeLine: TimeLine[] }> = ({ timeLine }) => {
  // const data = {
  //   labels: [
  //     '23.12.01',
  //     '23.12.20',
  //     '24.01.02',
  //     '24.02.04',
  //     '24.02.29',
  //     '24.03.02',
  //     '24.04.20',
  //   ],
  //   motorScores: [85 / 3, 88 / 3, 90 / 3, 92 / 3, 65 / 3],
  //   bladeScores: [75 / 3, 78 / 3, 80 / 3, 82 / 3, 65 / 3],
  //   escScores: [90 / 3, 92 / 3, 95 / 3, 97 / 3, 78 / 3],
  //   total: [250 / 3, 258 / 3, 265 / 3, 271 / 3, 208 / 3],
  // };
  const labels = timeLine.map((entry) => entry.date);
  const motorScores = timeLine.map((entry) => entry.motorPoint);
  const bladeScores = timeLine.map((entry) => entry.bladePoint);
  const escScores = timeLine.map((entry) => entry.escPoint);

  const totalScores = motorScores.map((_, index) => {
    return motorScores[index] + bladeScores[index] + escScores[index];
  });

  const barData = {
    labels: labels,
    datasets: [
      {
        type: 'bar' as const,
        label: '모터',
        backgroundColor: colors.accent100,
        data: motorScores,
        order: 1,
      },
      {
        type: 'bar' as const,
        label: '블레이드',
        backgroundColor: colors.accent50,
        data: bladeScores,
        order: 2,
      },
      {
        type: 'bar' as const,
        label: 'ESC',
        backgroundColor: colors.accent30,
        data: escScores,
        order: 3,
      },
      {
        type: 'line' as const,
        label: 'Total',
        data: totalScores,
        backgroundColor: colors.accent100,
        borderColor: colors.accent100,
        fill: false,
        pointHoverRadius: 8,
        pointHoverBorderWidth: 1,
        order: 0,
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      interaction: {
        mode: 'index',
      },
    },
    maxBarThickness: 40,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  };

  return (
    <StyledChart>
      <Chart type='bar' data={barData} options={options} />
    </StyledChart>
  );
};

export default MixChart;

const StyledChart = styled.div`
  canvas {
    width: 100% !important;
    height: 240px !important;
  }
`;
