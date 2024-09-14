import { useEffect, useState } from "react"
import Table from "react-bootstrap/Table"
import { useSelector } from "react-redux"
import PatientData from "./PatientData"
import styles from "./PatientsTable.module.css"

const PatientTable = ({
  hidePatientList,
  patientsList,
  searchType,
  isPrescriptionCreateMode,
  isMyPatientsChecked,
}) => {
  const [myList, setMyList] = useState([])
  const { patients: myPatients } = useSelector((state) => state.auth.authUser)

  useEffect(() => {
    if (isMyPatientsChecked) {
      const filteredList = patientsList.filter((f) =>
        myPatients.includes(f._id)
      )
      setMyList(filteredList)
    } else {
      setMyList(patientsList)
    }
  }, [isMyPatientsChecked, patientsList, myPatients])

  return (
    <div className={styles["patient-table-container"]}>
      <Table
        striped
        hover
        responsive="sm"
        size="sm"
        className={styles["stripped-table"]}
      >
        <thead>
          <tr>
            {searchType !== "prescriptions" ? (
              <>
                <th>First Name</th>
                <th>Last Name</th>
                {searchType === "patients" && (
                  <>
                    <th>ID Number</th>
                    <th></th>
                    {!isPrescriptionCreateMode && <th></th>}
                  </>
                )}
                {searchType === "doctors" && (
                  <>
                    <th>Email</th>
                    <th>Specialty</th>
                    <th>Healthcare Facility</th>
                  </>
                )}
                {isPrescriptionCreateMode && <th></th>}
              </>
            ) : (
              <>
                <th>Prescription Number</th>
                <th>Issued On</th>
                <th>Completed</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className={styles["tbody-list"]}>
          {myList.length === 0 ? (
            <tr style={{ fontWeight: "700" }}>
              <td colSpan={20}>
                No results found for the specified criteria
              </td>
            </tr>
          ) : (
            myList.map((p) => {
              return (
                <PatientData
                  key={p._id}
                  {...p}
                  hidePatientList={hidePatientList}
                  searchType={searchType}
                  isPrescriptionCreateMode={isPrescriptionCreateMode}
                  isMyPatientsChecked={isMyPatientsChecked}
                />
              )
            })
          )}
        </tbody>
      </Table>
    </div>
  )
}
export default PatientTable
