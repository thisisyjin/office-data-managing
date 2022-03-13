function Select({ options }, { onChange }) {
  return (
    <select defaultValue="sel" onChange={onChange}>
      <option value="sel">카테고리</option>
      {options.map(op => (
        <option>{op}</option>
      ))}
    </select>
  );
}

export default Select;

/*
import { useState } from "react";

function Select({ options }) {
  const [category, setCategory] = useState;
  const onChange = e => {
    setCategory(e.target.value);
  };
  return (
    <select defaultValue="sel" onChange={onChange} value={category}>
      <option value="sel">카테고리</option>
      {options.map(op => (
        <option>{op}</option>
      ))}
    </select>
  );
}

export default Select;


*/
