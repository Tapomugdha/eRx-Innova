export const validationRegex = {
  email: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    errorMessage: "Invalid email",
  },
  password: {
    validation: /^(?=.*[A-Za-zА-Яа-я])(?=.*\d?).{8,}$/,
    // errorMessage: "Password should be at least 8 characters and digits",
    errorMessage:
      "The password must be at least 8 characters long and include digits",
  },

  repeatPassword: {
    validation: /^(?=.*[A-Za-zА-Яа-я])[A-Za-zА-Яа-я\d]{8,}$/,
    errorMessage: "Passwords do not match",
  },
  firstName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Invalid first name",
  },
  lastName: {
    validation: /^[A-Za-zА-Яа-я]{2,}$/,
    errorMessage: "Invalid last name",
  },

  dateOfBirth: { validation: /.+/, errorMessage: "Date of birth is required" },
  patientId: {
    validation: /^\d{10}$/,
    errorMessage: "Invalid identification number",
  },

  pharmacistId: {
    validation: /^\d{10}$/,
    errorMessage: "Invalid identification number",
  },
  pharmacyName: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Invalid pharmacy name",
  },

  hospitalName: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Invalid hospital name",
  },
  doctorId: {
    validation: /^\d{10}$/,
    errorMessage: "Invalid identification number",
  },
  specialty: {
    validation: /^[a-zA-Z\s]{3,}$/,
    errorMessage: "Invalid specialty",
  },
}
