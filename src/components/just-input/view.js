import React from 'react';

export default ({ value, onChange }) =>
  <div>
    <input onChange={onChange} value={value}/>
    <div>
      Hello, value is "{value}"
    </div>
  </div>;
