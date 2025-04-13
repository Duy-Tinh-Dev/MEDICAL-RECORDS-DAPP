import { useForm } from "react-hook-form";
import { grantAccess, revokeAccess, checkAccess } from "@/utils/contact";
import { useState } from "react";

interface AccessFormData {
  patientId: string;
  doctorAddress: string;
}

export default function AccessControlTab() {
  const accessForm = useForm<AccessFormData>();
  const checkForm = useForm<AccessFormData>();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [accessStatus, setAccessStatus] = useState<boolean | null>(null);

  const onSubmitGrantAccess = async (data: AccessFormData) => {
    try {
      setError("");
      const result = await grantAccess(data.patientId, data.doctorAddress);
      if (result?.success) {
        setSuccess("Access granted successfully!");
      } else {
        setError(result?.error || "Failed to grant access");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSubmitRevokeAccess = async (data: AccessFormData) => {
    try {
      setError("");
      const result = await revokeAccess(data.patientId, data.doctorAddress);
      if (result?.success) {
        setSuccess("Access revoked successfully!");
      } else {
        setError(result?.error || "Failed to revoke access");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const onSubmitCheckAccess = async (data: AccessFormData) => {
    try {
      setError("");
      const result = await checkAccess(data.patientId, data.doctorAddress);
      setAccessStatus(result);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Grant/Revoke Access</h2>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Patient ID"
              {...accessForm.register("patientId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Doctor Address"
              {...accessForm.register("doctorAddress", { required: true })}
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={accessForm.handleSubmit(onSubmitGrantAccess)}
                disabled={accessForm.formState.isSubmitting}
                className="flex-1 bg-green-500 text-white p-2 rounded hover:bg-green-600">
                {accessForm.formState.isSubmitting
                  ? "Granting..."
                  : "Grant Access"}
              </button>
              <button
                type="button"
                onClick={accessForm.handleSubmit(onSubmitRevokeAccess)}
                disabled={accessForm.formState.isSubmitting}
                className="flex-1 bg-red-500 text-white p-2 rounded hover:bg-red-600">
                {accessForm.formState.isSubmitting
                  ? "Revoking..."
                  : "Revoke Access"}
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Check Access</h2>
          <form
            onSubmit={checkForm.handleSubmit(onSubmitCheckAccess)}
            className="space-y-2">
            <input
              type="text"
              placeholder="Patient ID"
              {...checkForm.register("patientId", { required: true })}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Doctor Address"
              {...checkForm.register("doctorAddress", { required: true })}
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              disabled={checkForm.formState.isSubmitting}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              {checkForm.formState.isSubmitting
                ? "Checking..."
                : "Check Access"}
            </button>
          </form>
          {accessStatus !== null && (
            <div className="mt-4 p-4 bg-gray-100 rounded">
              <p>Access Status: {accessStatus ? "Granted" : "Not Granted"}</p>
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
