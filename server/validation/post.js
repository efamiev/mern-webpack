import Validator from 'validator';
import isEmpty from './is-empty';

export default function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 10, max: 38 })) {
    errors.text = 'Post must be between 10 and 300 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.email = 'Text field is invalid';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
