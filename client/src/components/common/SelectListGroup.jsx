import React from 'react';
//  Libs
import { string, func, array } from 'prop-types';
import classnames from 'classnames';

const SelectListGroup = ({
  name, value, error, info, onChange, options
}) => {
  const selectOptions = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <div className="form-group">
      <select
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        value={value}
        onChange={onChange}
        name={name}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectListGroup.propTypes = {
  name: string.isRequired,
  value: string.isRequired,
  error: string,
  info: string,
  options: array.isRequired,
  onChange: func.isRequired
};

export default SelectListGroup;
