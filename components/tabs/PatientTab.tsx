import { useForm } from "react-hook-form";
import { Patient } from "@/interfaces/healthcare-contract-types";
import { registerPatient, getPatient } from "@/utils/contact";
import { useState } from "react";

interface RegisterFormData {
  patientId: string;
}

interface GetFormData {
  patientAddress: string;
}

export default function PatientTab() {
  const registerForm = useForm<RegisterFormData>();
  const getForm = useForm<GetFormData>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [patientData, setPatientData] = useState<Patient | null>(null);

  const onSubmitRegister = async (data: RegisterFormData) => {
    try {
      setError("");
      const result = await registerPatient(data.patientId);
      if (result?.success) {
        setSuccess("Patient registered successfully!");
        registerForm.reset();
      } else {
        setError(result?.error || "Failed to register patient");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSubmitGetPatient = async (data: GetFormData) => {
    try {
      setError("");
      const result = await getPatient(data.patientAddress);
      setPatientData(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Register Patient</h2>
          <form
            onSubmit={registerForm.handleSubmit(onSubmitRegister)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Patient ID"
              {...registerForm.register("patientId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              disabled={registerForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {registerForm.formState.isSubmitting
                ? "Registering..."
                : "Register Patient"}
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Get Patient Info</h2>
          <form
            onSubmit={getForm.handleSubmit(onSubmitGetPatient)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Patient Address"
              {...getForm.register("patientAddress", { required: true })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              disabled={getForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {getForm.formState.isSubmitting ? "Loading..." : "Get Patient"}
            </button>
          </form>
          {patientData && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <pre>{JSON.stringify(patientData, null, 2)}</pre>
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
