import React from 'react';
import ReactDOM from 'react-dom/client';
import DropDown from './lib/dropDownList';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <DropDown name='name' label='label' id='id_objt' list='data_table' onChange/>
</div>);


