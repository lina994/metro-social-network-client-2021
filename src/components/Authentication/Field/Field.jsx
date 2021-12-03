import React from 'react';
import s from './Field.module.css';


function handleValueChange(e, updateValue) {
  let value = e.target.value;
  updateValue(value);
}

function Field(props) {
  return (
    <div className={s.fieldWrapper}>
      <input 
        type={props.fieldType} 
        name={props.fieldName} 
        value={props.fieldValue}
        ref={ props.fieldElement } 
        onChange={(e) => handleValueChange(e, props.updateValue)}
        />
      <label>{props.fieldLabel}</label>
    </div>
  );
}


export default Field;

