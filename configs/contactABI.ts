export const contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "doctor",
        type: "address",
      },
    ],
    name: "AccessGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "doctor",
        type: "address",
      },
    ],
    name: "AccessRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "doctor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "doctorId",
        type: "string",
      },
    ],
    name: "DoctorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "patient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "patientId",
        type: "string",
      },
    ],
    name: "PatientRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "recordId",
        type: "string",
      },
    ],
    name: "RecordAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "accessPermissions",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "string",
        name: "recordId",
        type: "string",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
    ],
    name: "addMedicalRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "checkAccess",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "doctors",
    outputs: [
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "doctorId",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "specialization",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "doctorsByID",
    outputs: [
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "doctorId",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "specialization",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
    ],
    name: "getMedicalRecords",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "recordId",
            type: "string",
          },
          {
            internalType: "string",
            name: "patientId",
            type: "string",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "addedBy",
            type: "address",
          },
        ],
        internalType: "struct MedicalRecords.MedicalRecord[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "grantAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "patientRecords",
    outputs: [
      {
        internalType: "string",
        name: "recordId",
        type: "string",
      },
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "string",
        name: "data",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "patients",
    outputs: [
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "patientsByID",
    outputs: [
      {
        internalType: "address",
        name: "patientAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "doctorId",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "specialization",
        type: "string",
      },
    ],
    name: "registerDoctor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
    ],
    name: "registerPatient",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "patientId",
        type: "string",
      },
      {
        internalType: "address",
        name: "doctorAddress",
        type: "address",
      },
    ],
    name: "revokeAccess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
