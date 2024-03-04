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

const MixChart: React.FC = () => {
  const data = {
    labels: [
      '23.12.01',
      '23.12.20',
      '24.01.02',
      '24.02.04',
      '24.02.29',
      '24.03.02',
      '24.04.20',
    ],
    motorScores: [85 / 3, 88 / 3, 90 / 3, 92 / 3, 95 / 3],
    bladeScores: [75 / 3, 78 / 3, 80 / 3, 82 / 3, 85 / 3],
    escScores: [90 / 3, 92 / 3, 95 / 3, 97 / 3, 78 / 3],
    total: [250 / 3, 258 / 3, 265 / 3, 271 / 3, 258 / 3],
  };

  const barData = {
    labels: data.labels,
    datasets: [
      {
        type: 'bar' as const,
        label: '모터',
        backgroundColor: colors.accent100,
        data: data.motorScores,
        order: 1,
      },
      {
        type: 'bar' as const,
        label: '블레이드',
        backgroundColor: colors.accent50,
        data: data.bladeScores,
        order: 2,
      },
      {
        type: 'bar' as const,
        label: 'ESC',
        backgroundColor: colors.accent30,
        data: data.escScores,
        order: 3,
      },
      {
        type: 'line' as const,
        label: 'Total',
        data: data.total,
        backgroundColor: colors.accent100,
        borderColor: colors.accent100,
        fill: false,
        pointHoverRadius: 20,
        pointHoverBorderWidth: 5,
        order: 0,
      },
    ],
  };

  const options = {
    responsive: false,
    scale: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25, // y축의 간격을 조정하여 비율로 조정
        },
      },
    },
  };

  return (
    <StyleChart>
      <Chart type='bar' data={barData} options={options} />
    </StyleChart>
  );
};

export default MixChart;

const StyleChart = styled.div``;
