import React from 'react';
//  Libs
import { string, func } from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({
  name, placeholder, value, label, error, info, type, onChange, disabled
}) => (
    <div className="form-group">
      <input
        type={type}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
);

TextFieldGroup.propTypes = {
  name: string.isRequired,
  placeholder: string,
  value: string.isRequired,
  error: string,
  info: string,
  type: string,
  disabled: string,
  onChange: func.isRequired
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
