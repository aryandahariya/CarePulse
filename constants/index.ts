export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "Aryan Dahariya",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "Amrita Rai",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "Ishu Dahariya",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "Akash Baghel",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "Priyanshi Sonwani",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "Raman Yadav",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "Sahil Khan",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "Rashmi Agarwal",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "Hardik Sharma",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
