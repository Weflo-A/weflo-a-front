import { Stack } from '@mui/material';
import { DroneGroupCard } from './DroneGroupCard';
import { useParams } from 'react-router-dom';

export interface Drone {
  droneId: number;
  name: string;
  model: string;
  purpose: string;
  year: number;
  cost: number;
  date: string;
}
interface DroneListProp {
  items: Drone[];
}
const DroneGroupList = ({ items }: DroneListProp) => {
  const { groupId } = useParams();
  console.log('items', items);

  return (
    <Stack
      display='grid'
      gridTemplateRows='1fr'
      gridTemplateColumns='1fr 1fr'
      gap='1rem'
    >
      {items.map((item, index) => (
        <DroneGroupCard
          key={index}
          data={{
            id: item.droneId,
            name: item.name,
            model: item.model,
            usage: item.purpose,
            year: item.year,
            cost: item.cost,
            groupSetupDate: item.date,
            groupId: Number(groupId),
          }}
        />
      ))}
    </Stack>
  );
};

export { DroneGroupList };
