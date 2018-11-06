import React from 'react';
//  Libs
import { string, func } from 'prop-types';
import classnames from 'classnames';

const InputGroup = ({
  name, placeholder, value, error, icon, type, onChange
}) => (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
);

InputGroup.propTypes = {
  name: string.isRequired,
  placeholder: string,
  value: string.isRequired,
  error: string,
  icon: string.isRequired,
  type: string.isRequired,
  onChange: func.isRequired
};

InputGroup.defaultProps = {
  type: 'text'
};

export default InputGroup;
