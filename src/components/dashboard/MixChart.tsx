import React from 'react';
import { Bar, Chart } from 'react-chartjs-2';
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
    motorScores: [85, 88, 90, 92, 95],
    bladeScores: [75, 78, 80, 82, 85],
    escScores: [90, 92, 95, 97, 98],
    total: [280, 288, 289, 283],
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
        order: 1,
      },
      {
        type: 'bar' as const,
        label: 'ESC',
        backgroundColor: colors.accent30,
        data: data.escScores,
        order: 1,
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

  const lineData = {
    labels: data.labels,
    datasets: [
      {
        label: '모터',
        borderColor: colors.accent100,
        data: data.motorScores,
        fill: false,
        order: 1,
      },
      {
        label: '블레이드',
        borderColor: colors.accent50,
        data: data.bladeScores,
        fill: false,
        order: 1,
      },
      {
        label: 'ESC',
        borderColor: colors.accent30,
        data: data.escScores,
        fill: false,
        order: 1,
      },
      {
        label: 'Total',
        data: data.total,
        backgroundColor: colors.accent100,
        borderColor: colors.accent100,
        fill: false,
        // pointHoverRadius: 20,
        // pointHoverBorderWidth: 5,
        // type: 'line',
        order: 0,
      },
    ],
  };

  const options = {
    responsive: true, // canvas 반응형 여부
    animation: {
      duration: 3000,
      // easing: "easeInBounce",
    },
    scales: {
      y: {
        // type: 'linear',
        min: 0,
        max: 300,
      },
    },
  };

  // barData.datasets.forEach((dataset, index) => {
  //   dataset.data = dataset.data.map((value, i) => {
  //     let sum = value;
  //     for (let j = 0; j < index; j++) {
  //       sum += barData.datasets[j].data[i];
  //     }
  //     return sum;
  //   });
  // });

  return (
    <div>
      <Chart type='bar' data={barData} options={options} />
    </div>
  );
};

export default MixChart;
