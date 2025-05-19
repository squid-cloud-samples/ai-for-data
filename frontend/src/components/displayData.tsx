import {HealthData} from '../../../common/types.ts';

interface HealthDataProps {
  healthData: HealthData[];
}

const DisplayData: React.FC<HealthDataProps> = ({healthData}) => {
  return (
    <div className="scrolling">
      <table>
        <thead>
        <tr>
          <th>Patient ID</th>
          <th>Age</th>
          <th>Diagnosis</th>
        </tr>
        </thead>
        <tbody>
        {healthData.map((entry, index) => (
          <tr key={index}>
            <td>{entry.patientId}</td>
            <td>{entry.age}</td>
            <td>{entry.diagnosis}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
