import { ethers } from "ethers";
import { contractABI } from "@/configs/contactABI";
import { env } from "@/configs/env";
import {
  Patient,
  Doctor,
  MedicalRecord,
  TransactionResult,
  AccessCheckResult,
} from "@/interfaces/healthcare-contract-types";

export async function getContract() {
  if (typeof window !== "undefined" && window.ethereum) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(
      env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractABI,
      signer
    );
  }
  return null;
}

// Patient functions
export async function registerPatient(
  patientId: string
): Promise<TransactionResult> {
  const contract = await getContract();
  if (!contract) return { success: false, error: "Contract not available" };

  try {
    const tx = await contract.registerPatient(patientId);
    await tx.wait();
    return { success: true, transaction: tx };
  } catch (error: any) {
    console.error("Error registering patient:", error);
    return { success: false, error: error.message };
  }
}

export async function getPatient(address: string): Promise<Patient | null> {
  const contract = await getContract();
  if (!contract) return null;

  try {
    const result = await contract.patients(address);
    return {
      id: result.patientId,
      exists: result.exists,
      doctorsWithAccess: result.doctorsWithAccess || [],
    };
  } catch (error) {
    console.error("Error getting patient:", error);
    return null;
  }
}

// Doctor functions
export async function registerDoctor(
  doctorId: string,
  name: string,
  specialization: string
): Promise<TransactionResult> {
  const contract = await getContract();
  if (!contract) return { success: false, error: "Contract not available" };

  try {
    const tx = await contract.registerDoctor(doctorId, name, specialization);
    await tx.wait();
    return { success: true, transaction: tx };
  } catch (error: any) {
    console.error("Error registering doctor:", error);
    return { success: false, error: error.message };
  }
}

export async function getDoctor(address: string): Promise<Doctor | null> {
  const contract = await getContract();
  if (!contract) return null;

  try {
    const result = await contract.doctors(address);
    return {
      id: result.doctorId,
      name: result.name,
      specialization: result.specialization,
      exists: result.exists,
    };
  } catch (error) {
    console.error("Error getting doctor:", error);
    return null;
  }
}

// Medical Record functions
export async function addMedicalRecord(
  patientId: string,
  recordId: string,
  data: string
): Promise<TransactionResult> {
  const contract = await getContract();
  if (!contract) return { success: false, error: "Contract not available" };

  try {
    const tx = await contract.addMedicalRecord(patientId, recordId, data);
    await tx.wait();
    return { success: true, transaction: tx };
  } catch (error: any) {
    console.error("Error adding medical record:", error);
    return { success: false, error: error.message };
  }
}

export async function getMedicalRecords(
  patientId: string
): Promise<MedicalRecord[] | null> {
  const contract = await getContract();
  if (!contract) return null;

  try {
    const records = await contract.getMedicalRecords(patientId);
    return records.map((record: MedicalRecord) => ({
      recordId: record.recordId,
      patientId: record.patientId,
      timestamp: record.timestamp.toString(),
      data: record.data,
    }));
  } catch (error) {
    console.error("Error getting medical records:", error);
    return null;
  }
}

// Access control functions
export async function grantAccess(
  patientId: string,
  doctorAddress: string
): Promise<TransactionResult> {
  const contract = await getContract();
  if (!contract) return { success: false, error: "Contract not available" };

  try {
    const tx = await contract.grantAccess(patientId, doctorAddress);
    await tx.wait();
    return { success: true, transaction: tx };
  } catch (error: any) {
    console.error("Error granting access:", error);
    return { success: false, error: error.message };
  }
}

export async function revokeAccess(
  patientId: string,
  doctorAddress: string
): Promise<TransactionResult> {
  const contract = await getContract();
  if (!contract) return { success: false, error: "Contract not available" };

  try {
    const tx = await contract.revokeAccess(patientId, doctorAddress);
    await tx.wait();
    return { success: true, transaction: tx };
  } catch (error: any) {
    console.error("Error revoking access:", error);
    return { success: false, error: error.message };
  }
}

export async function checkAccess(
  patientId: string,
  doctorAddress: string
): Promise<AccessCheckResult> {
  const contract = await getContract();
  if (!contract) return null;

  try {
    return await contract.checkAccess(patientId, doctorAddress);
  } catch (error) {
    console.error("Error checking access:", error);
    return null;
  }
}
