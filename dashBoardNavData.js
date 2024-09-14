import {
  faBedPulse,
  faFilePen,
  faFilePrescription,
  faUser,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const dashBoardNavData = {
  doctor: [
    {
      linkTo: "/profile",
      text: "Profile",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/dashboard",
      text: "Dashboard",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/create-prescription",
      text: "Create Prescription",
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      linkTo: "/search/patients",
      text: "Patients",
      icon: <FontAwesomeIcon icon={faBedPulse} />,
    },
  ],
  pharmacist: [
    {
      linkTo: "/profile",
      text: "Profile",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/dashboard",
      text: "Dashboard",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/prescription/complete",
      text: "Complete Prescription",
      icon: <FontAwesomeIcon icon={faFilePen} />,
    },
    {
      linkTo: "/search/doctors",
      text: "Doctors",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
  patient: [
    {
      linkTo: "/profile",
      text: "Profile",
      icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
      linkTo: "/dashboard",
      text: "Dashboard",
      icon: <FontAwesomeIcon icon={faFilePrescription} />,
    },
    {
      linkTo: "/search/doctors",
      text: "Doctors",
      icon: <FontAwesomeIcon icon={faUserDoctor} />,
    },
  ],
}
