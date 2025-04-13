import { useState } from "react";
import PatientTab from "./tabs/PatientTab";
import DoctorTab from "./tabs/DoctorTab";
import MedicalRecordsTab from "./tabs/MedicalRecordsTab";
import AccessControlTab from "./tabs/AccessControlTab";

enum Tab {
  Patient = "patient",
  Doctor = "doctor",
  Records = "records",
  Access = "access",
}

export default function MedicalRecordsUI() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Patient);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Medical Records Management</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === Tab.Patient ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab(Tab.Patient)}>
          Patient
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === Tab.Doctor ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab(Tab.Doctor)}>
          Doctor
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === Tab.Records ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab(Tab.Records)}>
          Medical Records
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === Tab.Access ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab(Tab.Access)}>
          Access Control
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === Tab.Patient && <PatientTab />}
      {activeTab === Tab.Doctor && <DoctorTab />}
      {activeTab === Tab.Records && <MedicalRecordsTab />}
      {activeTab === Tab.Access && <AccessControlTab />}
    </div>
  );
}
