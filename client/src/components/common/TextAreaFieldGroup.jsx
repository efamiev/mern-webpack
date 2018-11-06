import React from 'react';
//  Libs
import { string, func } from 'prop-types';
import classnames from 'classnames';

const TextAreaFieldGroup = ({
  name, placeholder, value, error, info, onChange
}) => (
    <div className="form-group">
      <textarea
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
);

TextAreaFieldGroup.propTypes = {
  name: string.isRequired,
  placeholder: string,
  value: string.isRequired,
  error: string,
  info: string,
  onChange: func.isRequired
};

export default TextAreaFieldGroup;
