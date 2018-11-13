import React from 'react';
//  static
import spinner from '../../img/spinner.gif';

const Spinner = () => (
  <div>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </div>
);

export default Spinner;
