import { useState } from 'react';

const ControlledComponents = () => {
  const [value, setValue] = useState({
    name: 'default',
    text: 'text default',
    select: '',
    check: true,
    radioButton: '1',
  });

  const handleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  };

  console.log(value);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={value.name}
        onChange={handleChange}
      />
      {value.name.length < 5 ? <p> Longitud minima de 5</p> : null}
      <br />

      <textarea
        type="text"
        name="text"
        value={value.text}
        onChange={handleChange}
      />
      {value.text.length < 10 ? <p> Longitud minima de 10</p> : null}
      <br />

      <select value={value.select} name="select" onChange={handleChange}>
        <option value=""> -- Seleccione --</option>
        <option value="1"> option 1 </option>
        <option value="2"> option 2 </option>
        <option value="3"> option 3 </option>
      </select>
      {!value.select.length ? <p> Debe seleccionar una opción</p> : null}
      <br />

      <input
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check}
      />

      <div onChange={handleChange}>
        <label> Radio button 1</label>
        <input
          onChange={handleChange}
          name="radioButton"
          type="radio"
          value="1"
          checked={value.radioButton === '1'}
        />
        <label> Radio button 2</label>
        <input
          onChange={handleChange}
          name="radioButton"
          type="radio"
          value="2"
          checked={value.radioButton === '2'}
        />
        <label> Radio button 3</label>
        <input
          onChange={handleChange}
          name="radioButton"
          type="radio"
          value="3"
          checked={value.radioButton === '3'}
        />
      </div>
    </div>
  );
};

export default ControlledComponents;
