import {SquidService, executable} from '@squidcloud/backend';
import {generateShortId} from '@squidcloud/client';

export class AddDataService extends SquidService {
  @executable()
  async addMockData(): Promise<void> {
    const diagnoses = ['asthma', 'diabetes', 'hypertension', 'back pain', 'flu', 'allergies'];
    // add 30 random documents to the health_data collection
    await this.squid.runInTransaction(async (transactionId: string) => {
      for (let i = 0; i < 30; i++) {
        const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)];
        const age = Math.floor(Math.random() * (80 - 25 + 1)) + 25;
        const patientId = generateShortId(6);
        await this.squid.collection('health_data').doc().insert({patientId, age, diagnosis}, transactionId);
      }
    });
    console.log('Done adding data');
  }
}
