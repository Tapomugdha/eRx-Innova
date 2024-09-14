import moment from "moment"
import { isEmpty } from "ramda"
import Accordion from "react-bootstrap/Accordion"
import Button from "react-bootstrap/Button"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useReduxAction } from "../../../hooks/useReduxAction"
import { useReduxState } from "../../../hooks/useReduxState"
import { prescriptionsSlice } from "../../../reducers/prescriptions"
import CreatePerscriptionTemplateItem from "./CreatePerscriptionTemplateItem"
import style from "./CreatePrescriptionTemplate.module.css"

const CreatePrescriptionTemplate = ({
  medicineItems,
  onDeleteMedicineItemHandler,
  onEditItemHandler,
  showPopUpModal,
  currentPatient,
  showPatientList,
  hidePatientList,
}) => {
  const createPrescription = useReduxAction(
    prescriptionsSlice.actions.fetchCreatePrescription
  )
  const navigate = useNavigate()
  const currentDoctor = useReduxState((state) => state.auth.authUser)
  const getPrescriptions = useReduxAction(
    prescriptionsSlice.actions.fetchMyPrescriptions
  )

  const onSaveBtnClick = () => {
    const prescribedBy = currentDoctor._id
    const prescribedTo = currentPatient._id
    const medicines = medicineItems
    const data = {
      prescribedBy,
      prescribedTo,
      medicines,
    }

    if (isEmpty(medicines)) {
      return
    }

    createPrescription(data)
    getPrescriptions()
    navigate("/dashboard")
  }
  const authUser = useSelector((state) => state.auth.authUser)
  const { firstName, lastName, doctorId, hospitalName } = authUser

  const ageDiff = currentPatient?.dateOfBirth
    ? moment().diff(moment(currentPatient.dateOfBirth), "years", true)
    : null

  const roundedAge = ageDiff !== null ? Math.ceil(ageDiff) : "NA"

  return (
    <section className={style["section-openPerscription"]}>
      <div className={style["div-main-content"]}>
        <div className={style["div-header"]}>
          <h2 className={style["div-header-mainTitile"]}>Prescription Template</h2>
          <h3 className={style["div-header-title"]}>
            Ministry of Health
          </h3>
          <p>Dr: {currentDoctor.lastName}</p>
          <p>ID: {currentDoctor.doctorId}</p>
          <p>&#8470; Medical Practice: {currentDoctor.hospitalName}</p>
          <p>Email: {currentDoctor.email}</p>
        </div>
        <Button
          className={style["prescription-btn"]}
          onClick={() => showPopUpModal()}
        >
          Add Medicine
        </Button>

        <div className={style["div-articels"]}>
          <Accordion id={style["div-articels-accordion"]}>
            {medicineItems.map((x, index) => (
              <CreatePerscriptionTemplateItem
                {...x}
                key={index}
                index={index}
                onDeleteMedicineItemHandler={onDeleteMedicineItemHandler}
                onEditItemHandler={onEditItemHandler}
              />
            ))}
          </Accordion>
        </div>
        <Button onClick={onSaveBtnClick} className={style["prescription-btn"]}>
          Save Prescription
        </Button>
        <div className={style["div-userInfo"]}>
          <Button
            className={style["prescription-btn"]}
            onClick={showPatientList}
          >
            Back to Patient List
          </Button>
          <p>
            Patient:{" "}
            {`${currentPatient?.firstName || ""} ${
              currentPatient?.lastName || ""
            } `}
          </p>
          <p> Age: {roundedAge}</p>
          <p>
            Specifics:{" "}
            {currentPatient?.specifics && currentPatient?.specifics.length > 0
              ? currentPatient.specifics.join(",")
              : "none"}
          </p>
        </div>
      </div>
    </section>
  )
}

export default CreatePrescriptionTemplate
