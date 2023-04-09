import React from "react";
import styles from "./Form.module.css";

const Form = ({ 
  entryHeight, 
  entryWeight, 
  calculate, 
  setHeight, 
  setWeight
}) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.formContent}>
          <input type="number" onChange={setHeight} placeholder={entryHeight} />
          <input type="number" onChange={setWeight} placeholder={entryWeight} />
          <button onClick={calculate}>Calcular</button>
      </form>
    </div>
  );
};

export default Form;
