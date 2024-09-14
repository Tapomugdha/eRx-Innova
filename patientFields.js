export const patientFields = [
  {
    name: "patientId",
    placeholder: "Personal ID Number",
    classes: ["fadeIn", "second"],
    fieldType: "text",

    autoComplete: "off",

    option: undefined,
  },
  {
    name: "gender",
    placeholder: "Gender",
    classes: ["form-select", "fadeIn", "second"],
    fieldType: "select",
    autoComplete: "off",

    options: [
      { text: "Male", value: "male" },
      { text: "Female", value: "female" },
    ],
  },
  {
    name: "dateOfBirth",
    placeholder: "Date of Birth",
    classes: ["fadeIn", "second"],

    autoComplete: "off",

    fieldType: "date",
    option: undefined,
  },
]
