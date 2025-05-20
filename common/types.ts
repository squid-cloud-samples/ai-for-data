export interface HealthData {
  patientId: string;
  age: number;
  diagnosis: string;
}
export interface AiResponse {
  author: string;
  answer: string;
  executedQuery?: string | '';
  explanation?: string | '';
}
