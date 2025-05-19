import { useCollection, useQuery, useSquid } from '@squidcloud/react';
import './App.css';
import { useState } from 'react';
import NavBar from './components/navBar';
import { Button } from '@mui/material';
import "@squidcloud/ui/styles/index.css";
import DisplayData from './components/displayData.tsx';
import AiDatabot from './components/aiDatabot';
import {HealthData} from "../../common/types.ts";

function App() {
  const healthDataCollection = useCollection<HealthData>('health_data');
  const { executeFunction } = useSquid();
  const { data } = useQuery(healthDataCollection.query().dereference());

  // prevent adding mock data multiple times
  const [dataIsAdded, setDataIsAdded] = useState(false);

  const addData = async () => {
    await executeFunction('addMockData');
    setDataIsAdded(true);
  };

  return (
    <div>
      <NavBar />
      {data && <DisplayData healthData={data} />}
      {!dataIsAdded && <Button onClick={() => addData()}>
        Add Mock Data
      </Button>}
      <AiDatabot />
    </div>
  );
}

export default App;
