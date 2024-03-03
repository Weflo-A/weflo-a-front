import { Stack } from '@mui/material';
import { DroneGroupCard } from './DroneGroupCard';
import { droneListData } from 'src/assets/data/droneListData';

const DroneGroupList = () => {
  return (
    <Stack
      display='grid'
      gridTemplateRows='1fr'
      gridTemplateColumns='1fr 1fr'
      gap='1rem'
    >
      {droneListData.map((drone, index) => (
        <DroneGroupCard
          key={index}
          data={{
            name: drone.name,
            model: drone.model,
            usage: drone.usage,
            year: drone.year,
            cost: drone.cost,
            groupSetupDate: drone.groupSetupDate,
          }}
        />
      ))}
    </Stack>
  );
};

export { DroneGroupList };
