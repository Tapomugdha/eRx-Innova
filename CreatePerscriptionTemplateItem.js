import Accordion from 'react-bootstrap/Accordion';
import style from "./CreatePrescriptionTemplate.module.css";
import Button from 'react-bootstrap/Button';

const CreatePerscriptionTemplateItem =(
    {medicineName, dosage, dosageType, admission, admissionType, instructions, index, onDeleteMedicineItemHandler, onEditItemHandler}
) => {

    return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header>
                <span className={style["div-articels-accordion-item-span"]}>Rp/</span> 
                <span className={style['ingridients']}>{medicineName} {dosage}{dosageType}.</span>
            </Accordion.Header>
            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                How many times a day? {admission}{admissionType}.
            </Accordion.Body>
            <Accordion.Body className={style["div-articels-accordion-item-content"]}>
                <span>Usage instructions? {instructions}.</span>
                <br/>
                <Button variant="outline-success" onClick={() => onEditItemHandler(index)}>Edit</Button>
                <Button variant="outline-danger" onClick={() => onDeleteMedicineItemHandler(index)}>Delete</Button>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default CreatePerscriptionTemplateItem
