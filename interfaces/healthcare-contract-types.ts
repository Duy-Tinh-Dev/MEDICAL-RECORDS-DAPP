import { ContractTransactionResponse } from "ethers";

export interface Patient {
  id: string;
  exists: boolean;
  doctorsWithAccess?: string[];
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  exists: boolean;
}

export interface MedicalRecord {
  recordId: string;
  patientId: string;
  timestamp: string;
  data: string;
}

export type TransactionResult = {
  success: boolean;
  transaction?: ContractTransactionResponse;
  error?: string;
};

export type AccessCheckResult = boolean | null;
