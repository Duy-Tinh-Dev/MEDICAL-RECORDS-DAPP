import { useForm } from "react-hook-form";
import { MedicalRecord } from "@/interfaces/healthcare-contract-types";
import { addMedicalRecord, getMedicalRecords } from "@/utils/contact";
import { useState } from "react";

interface AddRecordFormData {
  patientId: string;
  recordId: string;
  recordData: string;
}

interface GetRecordsFormData {
  patientId: string;
}

export default function MedicalRecordsTab() {
  const addRecordForm = useForm<AddRecordFormData>();
  const getRecordsForm = useForm<GetRecordsFormData>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [medicalRecords, setMedicalRecords] = useState<MedicalRecord[]>([]);

  const onSubmitAddRecord = async (data: AddRecordFormData) => {
    try {
      setError("");
      const result = await addMedicalRecord(
        data.patientId,
        data.recordId,
        data.recordData
      );
      if (result?.success) {
        setSuccess("Medical record added successfully!");
        addRecordForm.reset();
      } else {
        setError(result?.error || "Failed to add medical record");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSubmitGetRecords = async (data: GetRecordsFormData) => {
    try {
      setError("");
      const result = await getMedicalRecords(data.patientId);
      if (result) {
        setMedicalRecords(result);
      } else {
        setMedicalRecords([]);
      }
    } catch (err: any) {
      setError(err.message);
      setMedicalRecords([]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Add Medical Record</h2>
          <form
            onSubmit={addRecordForm.handleSubmit(onSubmitAddRecord)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Patient ID"
              {...addRecordForm.register("patientId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Record ID"
              {...addRecordForm.register("recordId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Record Data"
              {...addRecordForm.register("recordData", { required: true })}
              className="w-full p-2 border rounded"
              rows={4}
            />
            <button
              type="submit"
              disabled={addRecordForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {addRecordForm.formState.isSubmitting
                ? "Adding..."
                : "Add Record"}
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Get Medical Records</h2>
          <form
            onSubmit={getRecordsForm.handleSubmit(onSubmitGetRecords)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Patient ID"
              {...getRecordsForm.register("patientId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              disabled={getRecordsForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {getRecordsForm.formState.isSubmitting
                ? "Loading..."
                : "Get Records"}
            </button>
          </form>
          {medicalRecords.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Medical Records:</h3>
              <div className="space-y-2">
                {medicalRecords.map((record, index) => (
                  <div key={index} className="p-4 bg-gray-100 rounded">
                    <pre>{JSON.stringify(record, null, 2)}</pre>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {success}
        </div>
      )}
    </div>
  );
}
