import React, { Component } from 'react';
//  libs
import { func, object } from 'prop-types';
import { connect } from 'react-redux';
//  components
import TextFieldGroup from '../common/TextFieldGroup';
// actions
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  static propTypes = {
    auth: object.isRequired,
    registerUser: func.isRequired,
    errors: object.isRequired
  };

  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  };

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const {
      name, email, password, password2
    } = this.state;
    const { errors } = this.props;

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextFieldGroup
                  placeholder="Email Address"
                  type="email"
                  value={email}
                  error={errors.email}
                  name="email"
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="Password"
                  type="password"
                  value={password}
                  error={errors.password}
                  name="password"
                  onChange={this.onChange}
                />
                <TextFieldGroup
                  placeholder="Confirm password"
                  type="password"
                  value={password2}
                  error={errors.password2}
                  name="password2"
                  onChange={this.onChange}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
