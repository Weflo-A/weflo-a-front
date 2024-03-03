import { DroneGroupCard } from './DroneGroupCard';
import { droneListData } from 'src/assets/data/droneListData';

const DroneGroupList = () => {
  return (
    <div>
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
    </div>
  );
};

export { DroneGroupList };
