# Medical Records DApp

A decentralized application (DApp) for managing medical records on the blockchain, providing secure and transparent access to patient data while maintaining privacy and control.

## 🚀 Features

- **Patient Management**: Register and retrieve patient information
- **Doctor Management**: Register and manage doctor profiles
- **Medical Records**: Add and retrieve medical records
- **Access Control**: Grant and revoke access to medical records
- **Blockchain Integration**: Secure and immutable record storage
- **User-Friendly Interface**: Modern UI with React and Tailwind CSS

## 🛠️ Technologies Used

### Frontend

- **React**: UI framework
- **TypeScript**: Type-safe development
- **React Hook Form**: Form handling and validation
- **Tailwind CSS**: Styling and responsive design
- **Ethers.js**: Ethereum blockchain interaction

### Smart Contract

- **Solidity**: Smart contract development
- **Hardhat**: Development environment
- **Ethereum**: Blockchain platform

## 📋 Project Structure

```
medical-records-dapp/
├── components/
│   ├── tabs/
│   │   ├── PatientTab.tsx
│   │   ├── DoctorTab.tsx
│   │   ├── MedicalRecordsTab.tsx
│   │   └── AccessControlTab.tsx
│   └── MedicalRecordsUI.tsx
├── interfaces/
│   └── healthcare-contract-types.ts
├── utils/
│   └── contact.ts
└── configs/
    ├── contactABI.ts
    └── env.ts
```

## 🎯 Project Approach

### 1. Smart Contract Development

- Developed a Solidity smart contract for medical records management
- Implemented access control mechanisms
- Ensured data privacy and security

### 2. Frontend Development

- Created a modular component structure
- Implemented React Hook Form for form handling
- Used TypeScript for type safety
- Developed a responsive UI with Tailwind CSS

### 3. Integration

- Connected frontend with smart contract using ethers.js
- Implemented proper error handling
- Added loading states and user feedback

## 🔧 Setup and Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd medical-records-dapp
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:

```bash
npm run dev
```

## 📝 Usage

1. Connect your Ethereum wallet (MetaMask)
2. Navigate through different tabs:
   - Patient: Register and view patient information
   - Doctor: Register and view doctor profiles
   - Medical Records: Add and view medical records
   - Access Control: Manage record access permissions

## 🔒 Security Features

- Role-based access control
- Secure data storage on blockchain
- Encrypted sensitive information
- Permission management system

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ethereum Foundation
- React Team
- Open-source community
