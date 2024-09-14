export const medicinesData = [
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Analgin",
    signature: "2 x 1 tablet",
    description:
      "Analgin tablets contain the active substance metamizole sodium, which belongs to the class of painkillers (analgesics). In addition to its analgesic effect, it also has antipyretic properties. Analgin is used for: relief of moderate to severe pain of various origins: headaches, toothaches, neuralgias, neuritis, myalgias (muscle pain), injuries, burns, postoperative pain, phantom pain (sensation of pain at the site of an absent limb), menstrual pain, pain in oncological diseases, renal and biliary colic, and for reducing high fever.",
  },
  {
    _id: "123456",
    dosage: "500mg",
    medicineName: "Paracetamol",
    signature: "2 x 1 tablet",
    description: "",
  },
];

export const prescriptionsData = [
  {
    _id: "12",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Syamaly",
      lastName: "Roy",
      doctorId: "7816000009",
      hospitalId: "7777773099",
      doctorPhone: "0893377777",
    },
    prescribedTo: {
      firstName: "Liza",
      secondName: "ray",
      lastName: "Chowdhary",
      age: "28",
      specifics: "none",
    },
  },

  {
    _id: "23",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "sheema",
      lastName: "Ghosh",
      doctorId: "8816840911",
      hospitalId: "7777773099",
      doctorPhone: "0893336491",
    },
    prescribedTo: {
      firstName: "Nayna",
      secondName: "gokhel",
      lastName: "Agarwal",
      age: "38",
      specifics: "diabetic",
    },
  },
  {
    _id: "34",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Sara",
      lastName: "Banarjee",
      doctorId: "9916847735",
      hospitalId: "7777773099",
      doctorPhone: "0893388674",
    },
    prescribedTo: {
      firstName: "leena",
      secondName: "Shastri",
      lastName: "Samandova",
      age: "18",
      specifics: "none",
    },
  },
  {
    _id: "43",
    medicines: [
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
      {
        article: "Nurofen 500",
        quantity: "2",
        methodOfUse: "after meals",
      },

      {
        article: "Analgin 100",
        quantity: "1",
        methodOfUse: "morning",
      },

      {
        article: "Spasmalgon",
        quantity: "1",
        methodOfUse: "before bedtime",
      },
    ],
    issuedOn: "string",
    isCompleted: true,
    validPeriod: "10.10.2010",
    prescribedBy: {
      name: "Seetal",
      lastName: "Saxena",
      doctorId: "4416840555",
      hospitalId: "7777773099",
      doctorPhone: "0893444449",
    },
    prescribedTo: {
      firstName: "Vikram",
      secondName: "roy",
      lastName: "Shankar",
      age: "26",
      specifics: "none",
    },
  },
];
