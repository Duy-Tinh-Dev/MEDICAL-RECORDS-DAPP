import { useForm } from "react-hook-form";
import { Doctor } from "@/interfaces/healthcare-contract-types";
import { registerDoctor, getDoctor } from "@/utils/contact";
import { useState } from "react";

interface RegisterFormData {
  doctorId: string;
  doctorName: string;
  doctorSpecialization: string;
}

interface GetFormData {
  doctorAddress: string;
}

export default function DoctorTab() {
  const registerForm = useForm<RegisterFormData>();
  const getForm = useForm<GetFormData>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [doctorData, setDoctorData] = useState<Doctor | null>(null);

  const onSubmitRegister = async (data: RegisterFormData) => {
    try {
      setError("");
      const result = await registerDoctor(
        data.doctorId,
        data.doctorName,
        data.doctorSpecialization
      );
      if (result?.success) {
        setSuccess("Doctor registered successfully!");
        registerForm.reset();
      } else {
        setError(result?.error || "Failed to register doctor");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSubmitGetDoctor = async (data: GetFormData) => {
    try {
      setError("");
      const result = await getDoctor(data.doctorAddress);
      setDoctorData(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Register Doctor</h2>
          <form
            onSubmit={registerForm.handleSubmit(onSubmitRegister)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Doctor ID"
              {...registerForm.register("doctorId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Doctor Name"
              {...registerForm.register("doctorName", { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Specialization"
              {...registerForm.register("doctorSpecialization", {
                required: true,
              })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              disabled={registerForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {registerForm.formState.isSubmitting
                ? "Registering..."
                : "Register Doctor"}
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Get Doctor Info</h2>
          <form
            onSubmit={getForm.handleSubmit(onSubmitGetDoctor)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Doctor Address"
              {...getForm.register("doctorAddress", { required: true })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              disabled={getForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {getForm.formState.isSubmitting
                ? "Loading..."
                : "Get Doctor"}
            </button>
          </form>
          {doctorData && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <pre>{JSON.stringify(doctorData, null, 2)}</pre>
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
