import React from 'react'

function FormGroupInput({inputConfig, cssConfig}) {
  const {type, name, txtValue} = inputConfig;
  const { formGroup, error} = cssConfig;

  return (
    <div className={ formGroup ? "form-group " + formGroup : 'form-group'}>
      <label htmlFor={name}>{txtValue}</label>
      {
        type === 'select' && (
          <select name={name} id={name}>
            {
              inputConfig.selectOptions.map( (option,index) => (
                <option 
                  key={'SelectOptions'+ index} 
                  value={option.value}
                >{option.txtValue}</option>
              ))
            }
          </select>
        )
      }
      {
        type === 'number' || type ==='text' && (
          <input type={type} name={name} id={name} />
        )
      }
      {
        type === 'date' && (
          <input type={type} name={name} id={name} />
        )
      }
      <div className={error ? `error errors-${name} ${error}` : `error errors-${name}`}></div>
    </div>
  )
}

export default FormGroupInput